import moroccanCities from "../MorrocanCities";
import  Button  from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect,useState } from "react";
import { getCurrentDate, isWeekend } from '../DateUtils';
import sendDataToBackend from "./api/api";
import InputGroup from 'react-bootstrap/InputGroup';
import  Alert from "./Alert"

//todo: dotenv addr isDev ? process.env.localAddress : 
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const telRegEx= /^[0-9]{9,10}$/
const MyForm = () => {

    const defaultTime=["8:00","9:00","10:00","11:00","13:00" ,"14:00", "15:00","16:00"]
    const [isHaveCompany, setCompany] = useState(false);
    const [formDate, setFormDate] = useState("");
    const [isNotValid,setNotValid]=useState(false);
    const [availableTimes,setAvailableTimes]=useState([]);
    const [form, setForm]=useState({
      nom:"", prenom:"", email:"",NumeroTelephone:"",ville:"", avoireEntre: "", nomEntre:"", objet:"", date:"", temps:""
    })
    const [emailIsValid, setEmailIsValid] = useState(null)
    const [telIsvalid, settelIsvalid] = useState(null)
    const [message ,setMessage]=useState({alert:"", display: false ,error:false});

    const handlechange= (e)=>{
      const {name,value}=e.target;
      switch(name){
        case "email": 
        if(value.length === 0){
          setEmailIsValid(null);
        }
        else if(value.match(emailRegex)){
          setEmailIsValid(true);
        }
        else{
          setEmailIsValid(false);
        }
        break;
        case "NumeroTelephone":
          if(value.length === 0){
            settelIsvalid(null);
          }
          else if(value.match(telRegEx)){
            settelIsvalid(true);
          }
          else{
            settelIsvalid(false);
          }
        break;

        case "avoireEntre":
        if (value === 'false') {
              setForm((prev) => ({
                ...prev,
                [name]: value,
                nomEntre : "",
        }))};
        break;
        default: break;
      }
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    const handleChangeDate = (e) => {
      const {value} = e.target;
      console.log(value);

      setForm((prevFormData) => ({
        ...prevFormData,
        date: value,
      }));

      fetchTime(value);
      setFormDate(value);

    }

    //sumbit
    const handleSumbit = async(e)=>{
      e.preventDefault();
      const result= await sendDataToBackend({...form,NumeroTelephone:"+212"+form.NumeroTelephone});
      if(result.success){
        console.log(result.message);
        if(result.message==="Le Rendez Vous est bien enregistré"){
            
            setMessage({alert: result.message , display:true , error:false});


          setTimeout(() => {
            setForm({
              nom: "",
              prenom: "",
              email: "",
              NumeroTelephone: "",
              ville: "",
              avoireEntre: "",
              nomEntre: "",
              objet: "",
              date: "",
              temps: ""
            });
          }, 0); 
        }else{


            setMessage({alert: result.message , display:true , error:true});
  

          console.log(result.message);
        }
      }else{
        console.log(result.message);
      }
    }

    const haveCompany = ()=>{
        setCompany(true);
    }
  
    const dontHaveCompany = ()=>{
      setCompany(false);
    }

    const fetchTime = async (date) => {
      // Check if the selected date is a weekend using the isWeekend function
      setNotValid(false);
      
      if (isWeekend(date)) {
        setNotValid(true);
        return; 
      }
      else{
        try {
          console.log(date);
          const response = await fetch(`http://localhost:5000/freeHoures/?date=${date}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          else{
            const jsonData = await response.json();
            if (Object.keys(jsonData).length === 0) {
                setAvailableTimes(defaultTime);
            }
            else{
              let excludedHours=jsonData.map(obj=>obj.heure_rv.slice(0,5));
              let filtredHoure=defaultTime.filter(time=>!excludedHours.includes(time));
              console.log(filtredHoure);
              setAvailableTimes(filtredHoure);
            }
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }    
    };

    useEffect(() => {
      setTimeout(() => {
        setMessage({ display: false, alert: '' });
    }, 5000); 
    }, [message.display]);

    return ( 
      <>
         <Alert message={message}  />

      <Form className="d-flex gap-2 flex-column py-1 gap-3 px-3 mt-modified" onSubmit={handleSumbit} >
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Nom"
            name="nom"
            value={form.nom}
            className="border rounded-0 font-regular border-customize"
            onChange={handlechange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Prenom"
            name="prenom"
            value={form.prenom}
            className="border rounded-0 font-regular border-customize"
            onChange={handlechange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="email"
            placeholder="email"
            name="email"
            value={form.email}
            className="border rounded-0 font-regular border-customize"
            onChange={handlechange}
            isInvalid={emailIsValid === false}
            required
          />
        </Form.Group>

        <InputGroup >
          <InputGroup.Text id="basic-addon1" className="rounded-0 font-regular bg-primary-cutsomized text-white">+212</InputGroup.Text>
          <Form.Control
              type="number"
              placeholder="Votre Numéro"
              name="NumeroTelephone"
              value={form.NumeroTelephone}
              className="border rounded-0 font-regular border-customize"
              onChange={handlechange}
              isInvalid={telIsvalid === false}
              required
            />
        </InputGroup>

        <Form.Group className="mt-0">
            <Form.Select
                aria-label="choisir ville"
                className="border rounded-0 font-regular border-customize"
                name="ville"
                value={form.ville}
                onChange={handlechange}
              >
              <option value="" className="font-regular" disabled selected >Ville</option>
            {moroccanCities.map((city, index) => (
                  <option key={index} value={city} className="font-regular" name="ville">
                    {city}
                  </option>
                ))}
            </Form.Select>
        </Form.Group>

        {isHaveCompany && (
           <Form.Group>
            <Form.Control
              type="text"
              placeholder="Nom de l'entreprise"
              name="nomEntre"
              className="border rounded-0 font-regular border-customize"
              onChange={handlechange}
              value ={form.nomEntre}
              required
            />
         </Form.Group>
          )}
        <Form.Group className="d-flex gap-2">
          <Form.Control
              type="date"
              className="border rounded-0 font-regular border-customize color-primary"
              min={getCurrentDate()}    
              onChange={handleChangeDate} 
              name="date"  
              value={form.date}   
              required
          /> 
          <Form.Select onChange={handlechange} value={form.temps} name="temps" className="border rounded-0 font-regular border-customize color-primary" disabled={isNotValid ? true : false} >
            <option value="" className="font-regular" disabled selected >Choisissez le temps de rendez-vous</option>

            {!isNotValid && availableTimes.map((time, index) => (
              <option key={index} value={time} className="font-regular">
                {time}
              </option>
            ))}

          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Control 
          as="textarea"
          rows={5}
          placeholder="objet de rendez-vous"
          className="overflow-hidden border rounded-0 font-regular border-customize color-primary text-area  "
          name="objet"
          onChange={handlechange}
          value=  {form.objet}
          required
           />
        </Form.Group>
        
        <Form.Group className="d-flex gap-2">
          <label className="font-regular">Vous avez une entreprise :</label>
          <Form.Check
          type="radio"
          label="Oui"
          name="avoireEntre"
          id="option-1"
          className="font-regular ms-2 custom-radio"
          onChange={handlechange}
          value={"true"}
          onClick={haveCompany}
          />
          <Form.Check
            type="radio"
            label="Non"
            name="avoireEntre"
            id="option-2"
            value={"false"}
            className="font-regular ms-2 custom-radio"
            onChange={handlechange}   
          onClick={dontHaveCompany}
          />
        </Form.Group>
        <Button  type="submit" variant="primary"  className="btn d-block w-25 rounded-0 text-white bg-primary-cutsomized font-regulare" disabled={isNotValid ? true : false}>
          Envoyer
          </Button>
      </Form>
      </>
     );
};

export default MyForm;
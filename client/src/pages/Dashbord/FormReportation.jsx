import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Button, Form ,Alert} from "react-bootstrap";
import { getCurrentDate, isWeekend, transformDateFormat } from "../DateUtils";

import "./style3.css"
const FormReportation = ({ userData }) => {
  const defaultTime = [
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
  ];
  const {
    nom_client,
    email_Client,
    formatted_date_rv,
    heure_rv,
    objet_Client,
    id_Client,
  } = userData;

 

  const [availableTimes, setAvailableTimes] = useState([]);
  const [isNotValid, setNotValid] = useState(false);
  const [error, setError] = useState({ alert: "", display: false });

  const [message, setMessage] = useState(`Cher(e) ${nom_client},
  Nous regrettons de vous informer que nous devons reporter votre rendez-vous prévu pour le ${formatted_date_rv} à ${heure_rv}. Nous nous excusons pour tout inconvénient que cela pourrait causer. Nous comprenons à quel point ce rendez-vous était important pour vous, et nous ferons tout notre possible pour le reprogrammer à une date qui vous convient.
  Détails de la réservation de votre nouveau rendez-vous :

  - Date : ${formatted_date_rv}
  - Heure : ${heure_rv}
  - Objet de votre rendez-vous : ${objet_Client}
  - Adresse de rendez-vous : Rte d'Essaouira, Souihla 40150, Marrakech

  Nous vous tiendrons informé(e) de la nouvelle date et heure dès que possible. Si vous avez des questions ou des préoccupations, n'hésitez pas à nous contacter au [numéro de téléphone] ou par e-mail à [adresse e-mail de contact]. Votre satisfaction est notre priorité, et nous sommes déterminés à vous offrir le meilleur service possible.

  Encore une fois, nous nous excusons pour ce report et espérons que nous pourrons vous accueillir très bientôt. Merci de votre compréhension.

  Cordialement,
  Service client
  Menara Holding
  kk@gmail.com`);



  const [form, setForm] = useState({ id: id_Client, date: transformDateFormat(formatted_date_rv),temps:"" });
  const [isSending, setIsSending] = useState({text:"Reporter",changeEtat:false});

  

  const fetchTime = async (date) => {
    // Check if the selected date is a weekend using the isWeekend function
    setNotValid(false);

    if (isWeekend(date)) {
      setNotValid(true);
      return;
    } else {
      try {
        console.log(date);
        const response = await fetch(
          `http://localhost:5000/freeHoures/?date=${date}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        } else {
          const jsonData = await response.json();
          if (Object.keys(jsonData).length === 0) {
            setAvailableTimes(defaultTime);
          } else {
            let excludedHours = jsonData.map((obj) => obj.heure_rv.slice(0, 5));
            let filtredHoure = defaultTime.filter(
              (time) => !excludedHours.includes(time)
            );
            console.log(filtredHoure);
            setAvailableTimes(filtredHoure);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    updateMessage(form.date, value);
  };
  
  const handleChangeDate = (e) => {
    const { value } = e.target;
    setForm((prevFormData) => ({
      ...prevFormData,
      date: value,
    }));
    fetchTime(value); // You can keep this line if it's needed
    updateMessage(value, form.temps); // Update the message based on the new date
  };

  const updateMessage = (newDate, newTime) => {
    setMessage(`Cher(e) ${nom_client},
      Nous regrettons de vous informer que nous devons reporter votre rendez-vous prévu pour le ${newDate==="" ?"[date]" : newDate} à ${newTime==="" ? "[temps]": newTime}. Nous nous excusons pour tout inconvénient que cela pourrait causer.
      Nous comprenons à quel point ce rendez-vous était important pour vous, et nous ferons tout notre possible pour le reprogrammer à une date qui vous convient.
      Détails de la réservation de votre nouveau rendez-vous :

      - Date : ${newDate}
      - Heure : ${newTime}
      - Objet de votre rendez-vous : ${objet_Client}
      - Adresse de rendez-vous : Rte d'Essaouira, Souihla 40150, Marrakech

      Nous vous tiendrons informé(e) de la nouvelle date et heure dès que possible. Si vous avez des questions ou des préoccupations, n'hésitez pas à nous contacter au [numéro de téléphone] ou par e-mail à [adresse e-mail de contact]. Votre satisfaction est notre priorité, et nous sommes déterminés à vous offrir le meilleur service possible.

      Encore une fois, nous nous excusons pour ce report et espérons que nous pourrons vous accueillir très bientôt. Merci de votre compréhension.

      Cordialement,
      Service client
      Menara Holding
      menaraHolding@gmail.com`);
  };
  const updateStatus= async()=>{
    try{
        const reponse= await fetch(`http://localhost:5000/updateClient/${id_Client}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({status:"Reproté",date :form.date ,temps:form.temps})
        });
        if(!reponse.ok){
            console.error('Failed to fetch data');
        }else{
            console.log(reponse);
        }
    }catch(err){
        console.log(err)
    }
  }

  const handleSubmit = async (e) => {
    console.log("in sumbit")
    e.preventDefault();
    setIsSending({text:"En coure..." ,changeEtat:"true"}); // Set isSending to true when the email sending process starts
    setError({ display: false, alert: "" }); // Clear any previous error message
    
    try {
      const sendEmail = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nom_client,
          email: email_Client,
          message: message.toString(),
          date: formatted_date_rv,
        }),
      });
      
      if (sendEmail.status === 200) {
        updateStatus();
        console.log("Email sent successfully");
        setIsSending({text:"Email été Envoyé" ,changeEtat:true});
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setError({ display: true, alert: "Email not sent successfully" });
      // Set isSending to false when there's an error sending the email
      setIsSending({text:"Envoyer", changeEtat:false});
    }
  };
  

  useEffect(() => {
    // This function will be called whenever the 'form' state changes
    console.log('Form data changed:', form);

    // You can perform actions here based on the form data.
    // For example, you can send the form data to an API, validate it, or update other parts of your component.

  }, [form]);
  return (
    <div>
      {error.display && <Alert variant="danger" className="ms-4" style={{ maxWidth: "765px" }} >{error.alert}</Alert>}
      <Form className=" d-flex flex-column gap-3 " onSubmit={handleSubmit}>
        <Form.Group className="d-flex flex-column justify-content-center algin-item-center ms-4">
          <Form.Label className="font-regulare ">Nom de Client</Form.Label>
          <Form.Control
            type="text"
            name="username"
            className="font-regulare"
            placeholder={nom_client}
            style={{ maxWidth: "765px" }}
            disabled
          />
        </Form.Group>
        <Form.Group className="d-flex flex-column justify-content-center algin-item-center ms-4">
          <Form.Label className="font-regulare ">
            Email de Destinataire
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder={email_Client}
            className="font-regulare"
            style={{ maxWidth: "765px" }}
            disabled
          />
        </Form.Group>
        <Form.Group className="d-flex flex-column justify-content-center algin-item-center ms-4">
          <Form.Label className="font-regulare ">
            Date et Heure de reportation :
          </Form.Label>
          <div
            className="d-flex justify-content-center align-items-center gap-2 "
            style={{ maxWidth: "765px" }}
          >
            <Form.Control
              type="date"
              name="date"
              min={getCurrentDate()}
              value={form.date}
              className="font-regulare"
              onChange={handleChangeDate}
              style={{ maxWidth: "765px" }}
            />
            <Form.Select
              onChange={handleChange}
              value={form.temps}
              name="temps"
              className="font-regular"
              disabled={isNotValid ? true : false}
            >
              <option value="" className="font-regular" disabled selected>
                Choisissez le temps de rendez-vous
              </option>

              {!isNotValid &&
                availableTimes.map((time, index) => (
                  <option key={index} value={time} className="font-regular">
                    {time}
                  </option>
                ))}
            </Form.Select>
          </div>
          <Form.Control
                as="textarea"
                rows={10}
                placeholder="objet de rendez-vous"
                name="objet"
                className="font-regular mt-4"
                style={{maxWidth: "765px"}}
                onChange={handleChange}
                value={message}
                readOnly
          />

        </Form.Group>

      <Button
        variant="outline-warning"
        className="ms-4 mt-2 w-25 font-regular"
        type="submit"
        disabled={isNotValid || isSending.changeEtat}
        style={{ width: "15px !important" }}
       
      >
        {isSending.text}
      </Button>
      </Form>
      
    </div>
  );
};

export default FormReportation;

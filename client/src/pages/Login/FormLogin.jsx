import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import Alert from "../RendezVous/Alert";


const FormLogin = ({setAuthenticated}) => {

    const [message ,setMessage]=useState({alert:"", display: false ,error:false});
    const [FormLogin, setFormLogin] = useState({username:"",password:""});
    const history=useHistory();
    const handlechange = (e) => {
      const {name, value}=e.target
        setFormLogin({...FormLogin,[name]:value});
    }

    const handleLogin = async (e)=>{
      e.preventDefault();
      try{
        const response = await fetch("http://localhost:5000/admin/login",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(FormLogin)
        });
        const parseRes = await response.json();
        console.log(parseRes);
        if(parseRes===true){
          setAuthenticated(true);
          history.push("/dashbord")
          console.log("Login Success")
        }
        else{
          setAuthenticated(false);
          setMessage({alert :"Username ou le mot de passe incorect", display:true,error:true})
        }
      }catch(err){
        console.log(err)
      }
    } 
    useEffect(() => {
    setTimeout(() => {
        setMessage({ display: false, alert: '' });
    }, 5000);
    }, [message.display]);
  return (
    <>
      <Alert message={message} className="py-2"/>
      <Form className="col-11 col-lg-6 d-flex flex-column gap-3 py-4 bg-primary-cutsomized rounded-2" onSubmit={handleLogin}>
        <h2 class="mx-auto text-white font-regular">Admine Session</h2>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            className="border rounded-0 font-regular border-customize"
            onChange={handlechange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="password"
            placeholder="password"
            name="password"
            className="border rounded-0 font-regular border-customize"
            onChange={handlechange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className=" login text-dark  bg-white border-0 rounded-0 font-regulare w-25  ">
          Login
        </Button>
      </Form>
      </>
  );
};

export default FormLogin;

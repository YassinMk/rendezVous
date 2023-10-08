import { Button, Form } from "react-bootstrap";
import SideNav from "./SideNav";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Alert from "../RendezVous/Alert";

const Confirm = () => {
  const location = useLocation();
  const {
    nom_client,
    email_Client,
    formatted_date_rv,
    heure_rv,
    status,
    id_Client,
    objet_Client,
  } = location.state.userData;
  const [isSending, setIsSending] = useState({text:"Envoyer",changeEtat:false});
  const [error, setError] = useState({ alert: "", display: false });
  const [Message, setMessage] = useState(`Cher(e) ${nom_client},
    Nous sommes ravis de vous confirmer votre réservation  le ${formatted_date_rv} à ${heure_rv}. Nous sommes impatients de vous accueillir à [adresse] à [heure] pour cette occasion spéciale.
    Détails de la réservation :
    
    - Date : ${formatted_date_rv}
    - Heure : ${heure_rv}
    - Objet de votre rendez-vous: ${objet_Client}
    - Adresse de rendez-vous : Rte d'Essaouira, Souihla 40150 ,Marrakech
    
    Si vous avez des questions ou si vous avez besoin de modifier votre réservation, n'hésitez pas à nous contacter au [numéro de téléphone] ou par e-mail à [adresse e-mail de contact].
    Nous vous remercions de nous avoir choisis et nous attendons avec impatience de vous servir.
    
    Cordialement,
    Service client
    Menara Holding
    yassinemkhallal@gmail.com`);

  const handleText = (e) => {
    setMessage(e.target.value);
  };

  const updateStatus= async()=>{
    try{
        const reponse= await fetch(`http://localhost:5000/updateClient/${id_Client}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({status:"Confirmé"})
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
    e.preventDefault();
    setIsSending({text:"En coure..." ,changeEtat:"true"}); // Set isSending to true when the email sending process starts
    setError({ display: false, alert: "" }); // Clear any previous error message
  
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nom_client,
          email: email_Client,
          message: Message.toString(),
          date: formatted_date_rv,
        }),
      });
  
      if (response.status === 200) {
        console.log("Email sent successfully");
        updateStatus();
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
    // This effect will run whenever isSending, validateSending, or errorOccurred changes.

    // You can add logic here to respond to changes in these variabl
    setTimeout(() => {
      setMessage({ display: false, alert: "" });
    }, 5000);

    // If you need to perform any actions based on these changes, you can do so here.
    // For example, you can enable/disable the button based on these variables.
  }, []);

  return (
    <>
      <div className="row">
        <SideNav />
        <div className="col-12 col-md-9 col-lg-9 py-4">
          <p className="font-regulare ms-4 text-colore-success text-success text-decoration-underline">
            Envoyer l email de confirmation a:
          </p>
          <Alert message={error.alert} className="py-2" />
          <Form className=" d-flex flex-column gap-3 " onSubmit={handleSubmit}>
            <Form.Group className="d-flex flex-column justify-content-center algin-item-center ms-4">
              <Form.Label className="font-regulare ">
                Nom de Destinataire
              </Form.Label>
              <Form.Control
                type="text"
                placeholder={nom_client}
                name="username"
                className="font-regulare"
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
                placeholder={email_Client}
                name="username"
                className="font-regulare"
                style={{ maxWidth: "765px" }}
                disabled
              />
            </Form.Group>

            <Form.Group className="d-flex flex-column justify-content-center algin-item-center ms-4">
              <Form.Label className="font-regulare ">
                Contenu du message{" "}
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                placeholder="objet de rendez-vous"
                name="objet"
                className="font-regular"
                style={{ maxWidth: "765px" }}
                onChange={handleText}
                value={`Cher(e) ${nom_client},
Nous sommes ravis de vous confirmer votre réservation  le ${formatted_date_rv} à ${heure_rv}. Nous sommes impatients de vous accueillir à  Rte d'Essaouira, Souihla 40150 ,Marrakech  à ${heure_rv} pour cette occasion spéciale.
Détails de la réservation :

- Date : ${formatted_date_rv}
- Heure : ${heure_rv}                
- Objet de votre rendez-vous: ${objet_Client}
- Adresse de rendez-vous : Rte d'Essaouira, Souihla 40150 ,Marrakech 

Si vous avez des questions ou si vous avez besoin de modifier votre réservation, n'hésitez pas à nous contacter au +212 0001121 12121 ou par e-mail à hh@gmail.com.
Nous vous remercions de nous avoir choisis et nous attendons avec impatience de vous servir.

Cordialement,
Service client 
Menara Holding
yassinemkhallal@gmail.com`}
                disabled
              />
            </Form.Group>
            <Button
              variant="outline-success"
              className="ms-4 mt-2 w-25"
              style={{ width: "25px !important" }}
              disabled={isSending.changeEtat}
              type="submit"
            >
              {isSending.text}
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Confirm;

import { Button, Form } from "react-bootstrap";
import SideNav from "./SideNav";
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const Confirm = () => {
    const location = useLocation();
    const { nom_client, email_Client, formatted_date_rv, heure_rv, status,objet_Client} = location.state.userData;

    return (
        <>
        <div className="row">
            <SideNav />
            <div className="col-12 col-md-9 col-lg-9 py-4">
                <p className="font-regulare ms-4 text-colore-success text-success text-decoration-underline">Envoyer l email de confirmation a:</p>
                <Form className=" d-flex flex-column gap-3 ">
                <Form.Group className="d-flex flex-column justify-content-center algin-item-center ms-4" >
                    <Form.Label className="font-regulare ">Nom de Destinataire</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={nom_client}
                        name="username"
                        className="font-regulare"
                        style={{maxWidth : "765px"}}
                        disabled
                    />
                </Form.Group>
                <Form.Group className="d-flex flex-column justify-content-center algin-item-center ms-4" >
                    <Form.Label className="font-regulare ">Email de Destinataire</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder={email_Client}
                        name="username"
                        className="font-regulare"
                        style={{maxWidth : "765px"}}
                        disabled
                    />
                </Form.Group>

                <Form.Group className="d-flex flex-column justify-content-center algin-item-center ms-4">
                    <Form.Label className="font-regulare ">Contenu du message </Form.Label>
                <Form.Control 
                as="textarea"
                rows={10}
                placeholder="objet de rendez-vous"
                name="objet"
                className="font-regular"
                style={{maxWidth : "765px"}}
                value={`Cher(e) ${nom_client},
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
yassinemkhallal@gmail.com`
            }
                disabled
                required
                />
                </Form.Group>
                <Button variant="outline-success" className="ms-4 mt-2 w-25" style={{ width: "25px !important" }}>Envoyer</Button>

                </Form>
            </div>
        </div>   
         </> 
     );
}
 
export default Confirm;
import { Button, Form } from "react-bootstrap";
import { IoLogInOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const ResearchHome = ({onSearchChange}) => {

    return ( 
        <div className="row ms-1 mx-lg-0">

            <div className="col-6 col-lg-9    " >
                <Form.Control type="text" placeholder="Chercher " className=" w-100 font-regular" onChange={(e)=>onSearchChange(e.target.value)} />
            </div>

            <div className="col-6 col-lg-3 " >
                <div className="ms-1">
                    <Link to="/LoginAdmin"><Button variant="outline-danger" className="ms-3 w-75"><IoLogInOutline width={"200px"} /> Deconnexion</Button></Link> 
                </div>
            </div>
        </div>
    );
}
 
export default ResearchHome;
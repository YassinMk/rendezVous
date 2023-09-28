import React from "react";
import"./style.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const NavDesktop = () => {
    
    return ( 
        <div className="col-5  col-md-2  d-none d-lg-block list-group  ">
                  <div className="vr modify ms-"></div>
                  <ul className="ps-0">
                      <li className="fw-bold home d-flex align-items-center py-1 " >
                          <img src="/assets/images/image-removebg-preview(6).png " alt="" width="35px"></img>
                          <a className="selected ms-2 fw-bold" href="/">Acceuil</a>
                      </li>
                      <li className="fw-bold home d-flex align-items-center py-1 diselected " >
                          <img src="/assets/images/image-removebg-preview(6).png " className="ms-1 " alt="boule"></img>
                          <a className=" ms-2" href="https://menara-holding.ma/group/Founder.html">Activité</a>
                      </li>
                      <li className="fw-bold home d-flex align-items-center py-1 diselected " >
                          <img src="/assets/images/image-removebg-preview(6).png " className="ms-1 " alt="boule" ></img>
                          <a className="ms-2" href="/">Le Groupe</a>
                      </li>
                      <li className="fw-bold home d-flex align-items-center py-1 diselected " >
                          <img src="/assets/images/image-removebg-preview(6).png " className="ms-1 " alt="boule" ></img>
                          <a className="ms-2" href="https://menara-holding.ma/RSE&DD.html">RSE & DD</a>
                      </li>
                      <li className="fw-bold home d-flex align-items-center py-1 diselected " >
                          <img src="assets/images/image-removebg-preview(6).png " className="ms-1" alt="boule" ></img>
                          <Link to="/Rendez-vous" id="link-to-rendez-vous" className=" ms-2" >Rendez-vous</Link>
                      </li>

                      
                  </ul>
        </div>
     );
}
 
export default NavDesktop;
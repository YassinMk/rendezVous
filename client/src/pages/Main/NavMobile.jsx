import { TfiAlignJustify } from "react-icons/tfi";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
import { useState } from "react";
import"./style.css"
const NavMobile = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
      };
    
    return ( 
        <div>
            {isNavOpen && (
                <nav className="row col-11 d-block d-lg-none bg-dark w-50 " id="list-nav">
                    <div className="d-flex align-items-center justify-content-start ms-4 mt-5 position-fixed">
                        <img src="/assets/images/image-removebg-preview(7).png" alt="logo" width={'200px'}/>  
                    </div>
                  
                    <ul className="ps-0 ms-5 text-white" style={{ margin: '18em ' }}>
                        <li class="fw-bold home d-flex align-items-center py-1">
                            <a className="selected ms-2 fw-bold" href="/">Acceuil</a>
                        </li> 
                        <hr style={{ borderColor: 'white' }} />
                        <li className="fw-bold home d-flex align-items-center py-1 dark diselected">
                            <a className="ms-2 fw-light text-white" href="/">Découvrez-nous</a>
                        </li>
                        <hr style={{ borderColor: 'white' }} />
                        <li className="fw-bold home d-flex align-items-center py-1 dark diselected ">
                            <a className="ms-2 fw-light text-white">Carrière</a>
                        </li>
                        <hr style={{ borderColor: 'white' }} />
                        <li className="fw-bold home d-flex align-items-center py-1 dark diselected">
                            <Link to="/Rendez-vous" className="ms-2  fw-light text-white"> Rendez-vous</Link>
                        </li>
                    </ul>
                </nav>
            )}
            <div class="col-1 d-block d-lg-none bg-dark">
                <div class="mt-5 " id="mobilenav">
                    <span  id="handleLabel" class="bg-dark py-2"><TfiAlignJustify onClick={handleNavToggle}/></span>  
                </div>
            </div>
        </div>
     );
}
 
export default NavMobile;
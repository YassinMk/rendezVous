import "./style3.css";
import { CiAlignLeft } from "react-icons/ci";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const SideNav = () => {
  const [isClicked, setisClicked] = useState(false);

  const handleClickMobile = () => {
    setisClicked(!isClicked);
  };

  return (
    <>
      <nav className="d-none  d-md-block col-md-3 border-end height-100 ">
        <div className="d-flex flex-column  justify-content-center ">
          <div className="d-flex justify-content-center  mt-4 ms-md-2">
            <img
              src="/assets/images/menara-logo-dark.png"
              alt="logo"
              width={"200px"}
            />
          </div>
          <div className="nav nav-pills  d-flex flex-column  justify-content-start ">
            <NavLink
              to="/dashbord"
              exact
              className={`mt-5 w-75 ms-4 ms-lg-5 px-1 py-2 border border-1 rounded-2 fs-5 text-center text-md-center font-regulare  nav-link  text-dark `}
            >
              <CiAlignLeft className="mb-1 me-1" />
              Dashbord
            </NavLink>

            <NavLink
              to="/dashbord/confirmation"
              className={`mt-3 w-75 ms-4 ms-lg-5 px-1 py-2 border border-1 rounded-2 fs-5 text-center text-md-center font-regulare nav-link  text-dark`}
            >
              <AiOutlineCheckCircle className="mb-1 me-1" />
              Confirmer
            </NavLink>

            <NavLink
              to="/dashbord/reportation"
              className={`mt-3 w-75 ms-4 ms-lg-5 px-1 py-2 border border-1 rounded-2 fs-5 text-center text-md-center font-regulare nav-link text-dark `}
            >
              <BiTime className="mb-1 me-1" />
              Reporter
            </NavLink>
          </div>
        </div>
      </nav>
      <nav className="d-block d-md-none   border border-bottom-1">
        <div className="d-flex flex-row justify-content-between align-items-center p-4 ">
          <div>
            <img
              src="/assets/images/menara-logo-dark.png"
              alt="logo"
              width={"200px"}
            />
          </div>
          <div className="me-5 transition-fade">
            {isClicked ? (
              <AiOutlineClose onClick={handleClickMobile} />
            ) : (
              <GiHamburgerMenu width={"150px"} onClick={handleClickMobile} />
            )}
          </div>
        </div>
        {isClicked && (
          <div className="position-relative tra">
            <div className="d-flex flex-column justify-content-center align-items-center gap-2">
              <div className="font-regulare fs-5 border-1 border-bottom w-100 text-center ">
                <Link to="/dashbord/">Panneau de Controle</Link>
              </div>
              <div className="font-regulare   fs-5 text-center border-bottom w-100 text-center ">
                <Link to="/dashbord/confirmation">Confirmation</Link>
              </div>
              <div className="font-regulare   fs-5 text-center  w-100 text-center border-bottom">
                <Link to="/dashbord/reportation">Reporter</Link>
              </div>
              <div className="font-regulare   fs-5 text-center  w-100 text-center text-danger">
                <Link to="/LoginAdmin" className="text-danger">
                  Deconnexion
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
export default SideNav;

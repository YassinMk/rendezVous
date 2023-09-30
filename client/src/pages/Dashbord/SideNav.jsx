import "./style3.css"
import { CiAlignLeft } from "react-icons/ci";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const SideNav = () => {
  const [isCustomized, setIsCustomized] = useState({dashbord :true , confirm:false , report:false});
  const [isClicked, setisClicked] = useState(false);
    const handleClickDashbord = () => {
      setIsCustomized({dashbord:true, confirm:false , report: false});
    };
    const handleClickConfirm = () => {
      setIsCustomized({dashbord:false, confirm:true , report: false});
    }
    const handleClickReport = () => {
      setIsCustomized({dashbord:false, confirm:false , report: true});
    }
    const handleClickMobile = () =>{
      setisClicked(!isClicked);
    }

  return ( 
     <>
    <nav className="d-none  d-md-block col-md-3 border-end height-100 ">
      <div className="d-flex flex-column  justify-content-center ">
        <div className="d-flex justify-content-center  mt-4 ms-md-2">
            <img src="/assets/images/menara-logo-dark.png" alt="logo" width={'200px'}  />
        </div>
        <div className="d-flex flex-column  justify-content-start ">

        <Link to="/dashbord/">
            <ul className={`mt-5 w-75    ms-4 ms-lg-5 px-1 py-2 border border-1 rounded-2 ${isCustomized.dashbord ? 'bg-primary-cutsomized ' :''}`}>
              <li className={`fs-5 text-center text-md-center  font-regulare ${isCustomized.dashbord ? 'text-white':'text-dark'}`} onClick={handleClickDashbord}>
                <CiAlignLeft className="mb-1 me-1" />Dashbord</li>
            </ul>
        </Link>

        <Link to="/dashbord/confirmation">
          <ul className={`mt-1 w-75    ms-4 ms-lg-5 px-1 py-2 border border-1 rounded-2 ${isCustomized.confirm ? 'bg-primary-cutsomized ' :''}`}>
            <li className={`fs-5 text-center text-md-center  font-regulare ${isCustomized.confirm ? 'text-white':'text-dark'}`} onClick={handleClickConfirm}><AiOutlineCheckCircle className="mb-1 me-1" />Confirmer</li>
          </ul>
        </Link>
        <Link to="/dashbord/reportation" >
          <ul className={`mt-1 w-75    ms-4 ms-lg-5 px-1 py-2 border border-1 rounded-2 ${isCustomized.report ? 'bg-primary-cutsomized ' :''}`}>
            <li className={`fs-5 text-center text-md-center  font-regulare ${isCustomized.report ? 'text-white':'text-dark'}`} onClick={handleClickReport}><BiTime className="mb-1 me-1" />Reporter</li>
          </ul>
        </Link>
        </div>
      </div>
       
    </nav>
    <nav className="d-block d-md-none   border border-bottom-1">
            <div className="d-flex flex-row justify-content-between align-items-center p-4 ">
                <div>
                  <img src="/assets/images/menara-logo-dark.png" alt="logo" width={'200px'}/>
                </div>
                <div className="me-5 transition-fade">
                 {isClicked ? <AiOutlineClose onClick={handleClickMobile} />  : <GiHamburgerMenu width={'150px'} onClick={handleClickMobile}  />}
                </div>
            </div>
            { isClicked && 
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
                      <Link to="/LoginAdmin" className="text-danger">Deconnexion</Link>
                    </div>
                  
                </div>
            </div>
            }
    </nav>
    </>
  );
}
export default SideNav;
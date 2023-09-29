import "./style3.css"
import { CiAlignLeft } from "react-icons/ci";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const SideNav = () => {
  const [isCustomized, setIsCustomized] = useState({dashbord :true , confirm:false , report:false});
    const handleClickDashbord = () => {
      setIsCustomized({dashbord:true, confirm:false , report: false});
    };
    const handleClickConfirm = () => {
      setIsCustomized({dashbord:false, confirm:true , report: false});
    }
    const handleClickReport = () => {
      setIsCustomized({dashbord:false, confirm:false , report: true});
    }
  return ( 
     
    <div className="d-none  d-md-block col-md-3 border-end height-100 ">
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

        <Link to="/dashbord/confirm">
          <ul className={`mt-1 w-75    ms-4 ms-lg-5 px-1 py-2 border border-1 rounded-2 ${isCustomized.confirm ? 'bg-primary-cutsomized ' :''}`}>
            <li className={`fs-5 text-center text-md-center  font-regulare ${isCustomized.confirm ? 'text-white':'text-dark'}`} onClick={handleClickConfirm}><AiOutlineCheckCircle className="mb-1 me-1" />Confirmer</li>
          </ul>
        </Link>
        <Link to="/dashbord/report" >
          <ul className={`mt-1 w-75    ms-4 ms-lg-5 px-1 py-2 border border-1 rounded-2 ${isCustomized.report ? 'bg-primary-cutsomized ' :''}`}>
            <li className={`fs-5 text-center text-md-center  font-regulare ${isCustomized.report ? 'text-white':'text-dark'}`} onClick={handleClickReport}><BiTime className="mb-1 me-1" />Reporter</li>
          </ul>
        </Link>
        </div>
      </div>
       
    </div>
  );
}
export default SideNav;
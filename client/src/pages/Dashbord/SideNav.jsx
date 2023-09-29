import "./style3.css"
import { CiAlignLeft } from "react-icons/ci";
import { AiOutlineCheckCircle } from "react-icons/ai";
const SideNav = () => {
  return ( 
    <div className="d-none  d-md-block col-md-3 border-end height-100 ">
      <div className="d-flex flex-column  justify-content-center ">
        <div className="d-flex justify-content-center  mt-4 ms-md-2">
            <img src="/assets/images/menara-logo-dark.png" alt="logo" width={'200px'}  />
        </div>
        <div className="d-flex flex-column  justify-content-start ">
          <ul className="mt-5 w-75    ms-4 ms-lg-5 px-1 py-2 border border-1 rounded-2 bg-primary-cutsomized">
            <li className="fs-5 text-center text-md-center text-white font-regulare "><CiAlignLeft className="mb-1 me-1" />Dashbord</li>
          </ul>
          <ul className="mt-1 w-75   ms-4 ms-lg-5 px-1 py-2 border border-1 rounded-2">
            <li className="fs-5 text-center text-md-center font-regular"><AiOutlineCheckCircle className="mb-1 me-1" />Confirmer</li>
          </ul>
          <ul className="mt-1 w-75   ms-4 ms-lg-5 px-1 py-2 border border-1 rounded-2">
            <li className="fs-5 text-center text-md-center font-regular"><AiOutlineCheckCircle className="mb-1 me-1" />Confirmer</li>
          </ul>
        </div>
      </div>
       
    </div>
  );
}
export default SideNav;
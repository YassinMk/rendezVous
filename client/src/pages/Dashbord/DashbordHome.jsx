import SideNav from "./SideNav";
import "./style3.css";
import ResearchHome from "./ResearchHome";
import Statistics from "./Statistics";
import TableDasbord from "./TableDashbord";
import { Card } from "react-bootstrap";

const Dashbord = () => {
  return (
    <>
      <div className="row">
        <SideNav />
        <div className="col-12 col-md-9 col-lg-9 py-4">
          <ResearchHome />
          <Statistics />
          <div className="py-5 px-modified w-modified ">
            <div className="font-regulare border rounded-top-2 bg-primary text-white py-2 px-3 fs-5 ">Liste des client</div>
            <TableDasbord />            
          </div>
        </div>
        </div>
    </>
  );
};

export default Dashbord;

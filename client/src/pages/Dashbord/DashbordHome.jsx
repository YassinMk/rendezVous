import SideNav from "./SideNav";
import "./style3.css";
import ResearchHome from "./ResearchHome";
import Statistics from "./Statistics";

const Dashbord = () => {
    
  return (
    
    <div className="row">
        <SideNav />
        <div className="col-12    col-md-9 col-lg-9  py-4">
            <ResearchHome />
            <Statistics />
        </div>

    </div>
  );
};

export default Dashbord;

import SideNav from "./SideNav";
import FormReportation from "./FormReportation";
import { useLocation, useHistory } from "react-router-dom";

const Report = () => {
    const location = useLocation();
    const history = useHistory();
    return ( 
        <div className="row">
            <SideNav />
            <div className="col-12 col-md-9 col-lg-9 py-4">
                 <FormReportation userData={location.state.userData} />
            </div>
        </div>
        
     );
}
 
export default Report;
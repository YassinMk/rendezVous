import SideNav from "./SideNav";
import "./style3.css";

import ResearchHome from "./ResearchHome";
const Dashbord = () => {
  return (
    <div className="row">
        <SideNav />
        <div className="col-12    col-md-9 col-lg-9  py-4">
            <ResearchHome />
            <div className="row gap-4 px-4  mt-5  ">
                <div className="col border rounded-2 shadow-sm py-2 ">
                    <div className="d-flex flex-row gap-3 ">
                        <div>
                            <img src="/assets/images/icons8-calendar-94.png" alt="calendare-icon"/>
                        </div>

                        <div className=" text-start mt-2">
                            <h4 className="font-regulare fs-5">Nombre des rendez-vous</h4>
                        </div>
                    </div>
                  
                </div>
                <div className="col border rounded-2 shadow-sm">
                        dsq
                </div>
                <div className="col border rounded-2 shadow-sm">
                        fdsf
                </div>
            </div>
        </div>

    </div>
  );
};

export default Dashbord;

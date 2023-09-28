import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { useState } from "react";
import "./style.css"
import PubliMain from "./PubliMain";
import NavDesktop from "./NavDesktop";
import MainSection from "./MainSection";
import NavMobile from "./NavMobile";
import Footer from "./Footer";

const Main = () => {
  const [showContent, setShowContent] = useState(false);
  const [showSection, setShowSection] = useState(false);
  const [showList,setShowList]=useState(false);



// Rename the variable to avoid conflicts with the global array "days"

const handleButtonClick = () => {
  setShowContent(true);
  setShowSection(true);
  setShowList(true);
 
};

  return (
    <div className="default" onClick={handleButtonClick}>
        <PubliMain/>
      {showContent &&<main className={`main-bg ${showContent ? `show` : ''}`}>
          <NavMobile />

      
      <div className="row logo  mx-lg-auto">
            <div className="col-4  mx-lg-auto py-5 " >
                <img src="/assets/images/image-removebg-preview(7) (1).png" width="400px" className="ms-3" alt="image"></img>
            </div>
        </div>
          <menu className="row  py-5 px-0  ms-4 mt-5">
              
              {showList && <NavDesktop />}
              {showSection&& <MainSection showSection={showSection} />}
          </menu>
          <Footer />
           </main>
          
       }
        
       

    </div>
   
  );
};

export default Main;
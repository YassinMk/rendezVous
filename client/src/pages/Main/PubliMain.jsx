import "./style.css"
import React from "react";
const PubliMain = () => {
    return ( 
        <div className="transition-fade">
          <div className="video-background">
            <video autoPlay loop muted playsInline>
              <source
                src="/assets/Menara Holding - Avec vous, construisons pour l'avenir.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
     );
}
 
export default PubliMain;
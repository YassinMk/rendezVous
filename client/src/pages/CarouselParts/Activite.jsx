import React from "react";
import "../RendezVous/style2.css";
import { useState } from "react";
import Footer from "../Main/Footer";

const DefaultPart = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

    const handleMouseEnter = (imageIdentifier) => {
      setHoveredImage(imageIdentifier);
    };
  
    const handleMouseLeave = () => {
      setHoveredImage(null);
    };
  
    const imageSources = {
      image1: hoveredImage === 'image1' ? '/assets/gif/1.gif' : '/assets/gif/transport-logistique.svg',
      image2: hoveredImage === 'image2' ? '/assets/gif/5.gif' : '/assets/gif/Social.svg',
      image3: hoveredImage === 'image3' ? '/assets/gif/3.gif':'/assets/gif/Immobilier.svg',
      image4: hoveredImage === 'image4' ? '/assets/gif/7.gif':'/assets/gif/BTP-Amenagemnt-urbanistique.svg',
      image5: hoveredImage === 'image5' ? '/assets/gif/4.gif':'/assets/gif/Divers.svg'
      // Add more image sources as needed
    };
    
    return ( 
        <div className="bg-image">
            <div className="primary-bg ">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="logo mt-4">
                      <img  src="/assets/images/menara-logo-dark.png" width={'250px'}/>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-around px-0 align-items-center" style={{marginTop:'10em'}}>
                  <div className="d-flex flex-column gap-4 justify-content-center  text-center">
                    <div>
                      <img
                        src={imageSources.image1} alt="Image 1" width={"100px"} onMouseEnter={() => handleMouseEnter('image1')} onMouseLeave={handleMouseLeave}
                      />
                      <h6 className="subtitle mt-2 bold">Transport & logistique</h6>
                    </div>

                    <div>
                      <img
                        src={imageSources.image2} alt="Image 2" width={"100px"} onMouseEnter={() => handleMouseEnter('image2')}onMouseLeave={handleMouseLeave}
                      />
                      <h6 className="subtitle mt-2">Social</h6>
                    </div>  

                  </div>
                  
                  <div className="text-center me-2">
                     <img src={imageSources.image3} alt="construct" width={'100px'}   onMouseEnter={() => handleMouseEnter('image3')} onMouseLeave={handleMouseLeave}  />
                     <h6 className="subtitle mt-2">Immobilier</h6>
                  </div>

                  <div className="d-flex flex-column gap-4 text-center mt-2">

                      <div>                    
                        <img src={imageSources.image4} alt="construct" width={'100px'}  onMouseEnter={() => handleMouseEnter('image4')} onMouseLeave={handleMouseLeave} /> 
                        <h6 className="subtitle mt-2">BTP & Amenagemnt</h6>
                      </div>

                      <div>
                        <img src={imageSources.image5}alt="construct" width={'100px'}  onMouseEnter={() => handleMouseEnter('image5')} onMouseLeave={handleMouseLeave} /> 
                        <h6 className="subtitle mt-2">Driver</h6>
                      </div>
                  </div>
                </div>

                <div className="text-center font-regular mt-4 mb-0 ">
                  <h3 className="title-1"><span className="bold text-colore">Découvrez </span>Nous activité</h3>
                </div>

                <div style={{marginTop:'1em'}}>
                  <Footer  />
                </div>

              </div>
            </div>
        
     );
}
 
export default DefaultPart;
import React from "react";
import "../RendezVous/style2.css";

const Transport = () => {
    return ( 
     <div className="bg-image-2">
        <div className="primary-bg">
            <div className="d-flex  justify-content-center">
              <div className="d-flex justify-content-center flex-column align-items-center mt-lg-5 mt-md-6 mt-2 ">
                  <img
                        src="/assets/gif/1.gif" alt="Image 1" width={"100px"} 
                  />
                  <h6 className="mt-3 bold">Transport & logistique</h6>
                  <img src="/assets/images/hline.svg" width={"670px"}  className="mt-lg-2 mt-md-3"></img>

                  <div className="d-flex  flex-column justify-content-evenly align-items-center">

                      <div className="bg-white border rounded-2 mx-2 my-4 my-md-2">
                          <img src="/assets/images/transport/1CTM.png" width={'200px'} />
                      </div>

                      <div className=" bg-white border rounded-2 mx-2 my-3 shadow-lg">                          
                          <img src="/assets/images/transport/3ML.png" width={'200px'} />
                      </div>

                      <div className="bg-white border rounded-2 mx-2  my-3 ">
                          <img src="/assets/images/transport/MTL.png" width={'200px'} />
                      </div>

                  </div>
                  
                  <img src="/assets/images/hline.svg" width={"670px"} className="mt-2"></img>

                  <div className=" text-center mt-lg-6 mt-5 px-5 px-lg-4">
                      <p className="font-regular ">
                        Découvrez l'univers de Ména Holding le transport stratégique et la logistique innovante se réunissent <span className="bold">pour créer l'avenir.</span></p>
                  </div>
              </div>
              
             
            </div>
        </div>
    </div>
     );
}
 
export default Transport;
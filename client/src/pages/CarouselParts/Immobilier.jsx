
import React from "react";
import "../Main/style.css";
import "../RendezVous/style2.css";

const Immobilier = () => {
    return ( 
    <div className="bg-image-3">
        <div className="primary-bg">
            <div className="d-flex  justify-content-center">
              <div className="d-flex justify-content-center flex-column align-items-center mt-lg-5 mt-md-5 ">
                  <img
                        src="/assets/gif/3.gif" alt="Image 1" width={"100px"} 
                  />
                  <h6 className="mt-3 bold">Immobilier</h6>

                  <img src="/assets/images/hline.svg" width={"670px"}  className="mt-1 mt-lg-3"></img>

                    <div className="d-flex  flex-column justify-content-evenly align-items-center mt-3">

                        <div className="bg-white border rounded-2  mx-2 my-0 my-md-2 ">
                                <img src="/assets/images/immobilier/SIT.png" width={'200px'} />
                                
                        </div>

                        <div className="px-5 text-center font-regular my-2">
                            <p className="title-2  px-md-5">
                            Fondée en 1998 sous le nom d'Immobilière Tensift, Ménara Real Estate est un acteur majeur de la promotion immobilière au Maroc, se consacrant à la réalisation de projets de logement social, moyen et haut standing. Nous élaborons actuellement un plan stratégique ambitieux pour contribuer activement à l'amélioration du logement au Maroc. Notre engagement envers l'innovation, la durabilité et l'excellence nous permet de répondre aux besoins 
                            de nos clients et d'avoir un impact positif sur la vie des citoyens marocains.
                            </p>
                        </div>

                    </div>
                  <img src="/assets/images/hline.svg" width={"670px"}  className="mt-2"></img>

             </div>
            </div>
        </div>
    </div>

     );
}
 
export default Immobilier;
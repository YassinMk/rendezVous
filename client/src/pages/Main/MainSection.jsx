import React from "react";
import "./style.css"
const MainSection = (props) => {
    return ( 
        <section className={`col-11 col-lg-8 Acceuil-descrp py-3 section-main  ms-2 ms-md-0 ${props.showSection ? 'show-section' : ''}`} >
                      <h3 className="title-1"><span className="bold">ménara</span> Holding</h3>
                      <h3 className="title-1">avec vous,<span className="bold"> construisons </span>pour l'avenir...</h3>
                      <p className="py-2 title-2">
                          Le Groupe Ménara Holding compte à présent 9 sociétés, et 1932 Collaborateurs actifs dans 6 secteurs d'activité, les domaines sont variés mais non moins complémentaires. 
                          Le secteur du BTP représente son principal cœur de métier. Un domaine où les différentes entités interviennent sur l’ensemble de la chaine de valeur.
                      </p>
                  <div className=" d-flex flex-column  flex-md-column d-lg-flex flex-lg-row gap-4">
                      <button type="button" className=" play-film" >
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-play-fill hover " viewBox="0 0 16 16">
                              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                            </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-play-fill play " viewBox="0 0 16 16">
                              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                            </svg>
                          <span className="separatore"></span>
                          Film Instititionnel
                      </button>
                      <button type="button" className="brochure py-2 py-md-0" >
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-download brochure-dw " viewBox="0 0 16 16">
                              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                            </svg>
                            <span className="separatore  w-1 ms-2" ></span>
                            Borchure menara-Holding
                      </button>
                  </div>
        </section>
     );
}
 
export default MainSection;
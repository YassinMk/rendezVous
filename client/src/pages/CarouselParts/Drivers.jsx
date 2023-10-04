import "../RendezVous/style2.css";

const Drivers = () => {
  return (
    <div className="bg-image-5">
      <div className="primary-bg">
        <div className="d-flex  justify-content-center">
          <div className="d-flex justify-content-center flex-column align-items-center  mt-5 mt-lg-5 ">

                    <img src="/assets/gif/4.gif" alt="gif4" width={"100px"} />
                        <h6 className="mt-3 bold text-dark">Drivers</h6>
                    <img src="/assets/images/hline.svg" width={"670px"}  className="mt-5 mt-md-4 mt-lg-3 " />

                <div className="d-flex  flex-column justify-content-evenly align-items-center mt-3">

                    <div className="bg-white border rounded-2 mx-2 my-0 my-md-2 ">
                          <img src="/assets/images/Drivers/MGP-ecran.png" width={'150px'} />         
                    </div>

                    <div className="px-5 text-center font-regular my-2">
                            <p className="title-2 px-5">
                            Chaque année, Marrakech accueille le Marrakech Grand Prix, une étape du championnat WTCR reconnue par la FIA. Le Circuit International Moulay El Hassan, soutenu par Sa Majesté le Roi Mohammed VI, est un paddock de renommée mondiale. Il est le fruit des efforts de Ménara Holding, offrant également un parc d'exposition,
                             un circuit automobile et une académie de Karting, ainsi que la compétition de Formule E depuis 2016.
                            </p>
                    </div>
                    
                </div>

                <img src="/assets/images/hline.svg" width={"670px"}  className="mt-2" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Drivers;

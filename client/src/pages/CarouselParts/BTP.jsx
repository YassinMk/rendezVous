import "../RendezVous/style2.css";


const BTP = () => {
  return (
    <div className="bg-image-2">
      <div className="primary-bg">
        <div className="d-flex  justify-content-center">
          <div className="d-flex justify-content-center flex-column align-items-center mt-6 mt-md-6 ">
            <img src="/assets/gif/7.gif" alt="BTP" width={"100px"} />
            <h6 className="mt-3 bold text-dark">BTP</h6>
                  <img src="/assets/images/hline.svg" width={"670px"}  className="mt-2" />
            
            <div className="d-flex flex-column justify-content-evenly align-items-center ">

                    <div className="bg-white border rounded-2 mx-2 my-4 my-md-3 ">
                        <img src="/assets/images/BTP/2MP.png" width={'175px'} />
                    </div>

                    <div className=" bg-white border rounded-2 mx-2 my-md-2 shadow-lg">                          
                        <img src="/assets/images/BTP/3revetium.png" width={'175x'} />
                    </div>

                    <div className="bg-white border rounded-2 mx-2  my-3 ">
                        <img src="/assets/images/BTP/4MES.png" width={'175px'} />
                    </div>

            </div>
             
            <img src="/assets/images/hline.svg" width={"670px"} className="mt-2" />

            <div className=" text-center mt-lg-6 mt-5 px-5 px-lg-4">
                        <p className="font-regular text-dark ">
                        "Ménara Holding se distingue comme le fer de lance des travaux publics, façonnant l'avenir des infrastructures avec innovation et excellence."
                        </p>
              </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default BTP;

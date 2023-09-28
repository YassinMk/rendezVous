import "../RendezVous/style2.css";

const Social = () => {
  return (
    <div className="bg-image-4">
      <div className="primary-bg">
        <div className="d-flex  justify-content-center">

          <div className="d-flex justify-content-center flex-column align-items-center  mt-lg-5 mt-md-5  ">

                <img src="/assets/gif/5.gif" alt="gif5" width={"100px"} />
                <h6 className="mt-3 bold">Social</h6>
                    <img src="/assets/images/hline.svg" width={"670px"}  className="mt-1 mt-lg-3" />

                <div className="d-flex  flex-column justify-content-evenly align-items-center mt-2 mt-lg-2 ">
                  
                    <div className="bg-white border rounded-2 mx-2 my-0 my-md-2 ">
                                    <img src="/assets/images/social/FZ.png" width={'150px'} />         
                    </div>

                    <div className="px-5 text-center font-regular my-2">
                            <p className="title-2 px-md-5">
                            "En 2015, Menara Holding a créé la Fondation Zahid avec un double objectif : améliorer les actions sociales en faveur de son capital humain et s'engager pour l'éducation. La fondation concrétise sa vision grâce à une collaboration avec des institutions et la société civile. Elle a déjà initié des actions telles que la construction ou la rénovation d'écoles, le soutien scolaire et des bourses, en milieu rural et urbain, affirmant ainsi
                             son engagement envers la valorisation de l'humain et l'éducation en tant que devoir national."
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

export default Social;

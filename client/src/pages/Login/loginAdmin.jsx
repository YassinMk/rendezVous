import Header from "./Header";
import FormLogin from "./FormLogin";
import { useState, useEffect } from "react";
import Footer from "../Main/Footer";

const LoginAdmin = ({setAuthenticated}) => {
    const [isAnimated, setisAnimated] = useState(false);

    useEffect(() => {
        setisAnimated(true);
      }, []);

    return ( 
        <div className={`container-fluid animation-showup ${isAnimated ? "animated" : ""} bg-modified default-bg`}>
                <Header />
            <main className="row d-flex justify-content-center align-items-center flex-column mt-5 mt-md-6">
                <FormLogin setAuthenticated={setAuthenticated}/>
            </main>
        <Footer />
        </div>
     );
}
 
export default LoginAdmin;
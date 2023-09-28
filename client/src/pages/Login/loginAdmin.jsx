import Header from "./Header";
import FormLogin from "./FormLogin";
import { useState, useEffect } from "react";

const LoginAdmin = ({setAuthenticated}) => {
    const [isAnimated, setisAnimated] = useState(false);

    useEffect(() => {
        setisAnimated(true);
      }, []);

    return ( 
        <div className={`container-fluid animation-showup ${isAnimated ? "animated" : ""} bg-modified default-bg`}>
                <Header />
            <main className="row d-flex justify-content-center align-items-center flex-column mt-6">
                <FormLogin setAuthenticated={setAuthenticated}/>
            </main>
        </div>
     );
}
 
export default LoginAdmin;
import Fade from 'react-bootstrap/Fade';
import { GoAlertFill } from 'react-icons/go';
import {FiCheck} from 'react-icons/fi';
import React  from 'react';

const Alert = (props) => {
        const {message}= props;
        const {display , alert , error}=message;
        console.log(message);
    return (  
        <Fade in={display} timeout={8000}>
        <div className={` text-center font-Bold ${error ?'text-danger':'text-success'} `}>
          {error ? <GoAlertFill /> : <FiCheck /> } {alert}
        </div>
      </Fade> );
}
 
export default Alert;
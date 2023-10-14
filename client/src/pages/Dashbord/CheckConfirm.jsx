
import React from 'react';
import { useLocation } from "react-router-dom";
import Confirm from "./Confirm";
import ConfirmOption from './ConfirmOption';
import { useHistory } from "react-router-dom";
const CheckConfirm = () => {
    const location = useLocation();
    const history = useHistory();

  if (location.state) {
    // If location.state is true, navigate to Confirm component
    return <Confirm userData={location.state.userData}/>;
  } else {
    // If location.state is not true, navigate to ConfirmPopup component
    return <ConfirmOption />;
  }
}
 
export default CheckConfirm;
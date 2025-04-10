import { Routes, Route, useLocation } from "react-router-dom";
import Signin from "./Signin";
import Login from "./Login";

const ModalRoutesWrapper = () => {
  const location = useLocation();
  const state = location.state;

  const backgroundLocation = state?.backgroundLocation;

  return backgroundLocation ? (
    <Routes>
      <Route path="/Signin" element={<Signin onClose={() => window.history.back()} />} />
      <Route path="/Login" element={<Login onClose={() => window.history.back()} />} />
    </Routes>
  ) : null;

  
};

export default ModalRoutesWrapper;

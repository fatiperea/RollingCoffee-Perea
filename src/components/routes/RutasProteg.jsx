import { Navigate } from "react-router-dom";

const RutasProteg = ({ children }) => {
  const admin = JSON.parse(sessionStorage.getItem("InicioSesionRC")) || null;

  if (!admin) {
    return <Navigate to="/login"></Navigate>;
  } else {
    return children;
  }
};

export default RutasProteg;

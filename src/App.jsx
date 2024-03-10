//import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Menu from "./components/Menu";
import Inicio from "./components/pages/Inicio";
//import Administrador from "./components/pages/Administrador";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Error404 from "./components/pages/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detalle from "./components/pages/Detalle";
//import CrearProducto from "./components/pages/CrearProducto";
import Login from "./components/pages/Login";
import RutasProteg from "./components/routes/RutasProteg";
import RutasAdmin from "./components/routes/RutasAdmin";
import { useState } from "react";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("InicioSesionRC")) || "";
  const [logueado, setLogueado] = useState(usuario);

  return (
    <BrowserRouter>
      <Menu logueado={logueado} setLogueado={setLogueado}></Menu>

      <Container className="contenPrincipal container-fluid">
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route
            exact
            path="/administrador/*"
            element={
              <RutasProteg>
                {" "}
                <RutasAdmin></RutasAdmin>{" "}
              </RutasProteg>
            }
          ></Route>
          <Route
            exact
            path="/detalle/:id"
            element={<Detalle></Detalle>}
          ></Route>
          {/*
          <Route
            exact
            path="administrador/crear"
            element={<CrearProducto editar={false} titulo="Nuevo producto"></CrearProducto>}
          ></Route>
          <Route
            exact
            path="administrador/editar/:id"
            element={<CrearProducto editar={true} titulo="Editar producto"></CrearProducto>}
          ></Route>*/}

          <Route path="*" element={<Error404></Error404>}></Route>
          <Route exact path="/login" element={<Login setLogueado={setLogueado}></Login>}></Route>
        </Routes>
      </Container>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

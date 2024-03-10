import { Route, Routes } from "react-router";
import Administrador from "../pages/Administrador";
import CrearProducto from "../pages/CrearProducto";

const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrador></Administrador>}></Route>

        <Route
          exact
          path="/crear"
          element={
            <CrearProducto
              editar={false}
              titulo="Nuevo producto"
            ></CrearProducto>
          }
        ></Route>
        <Route
          exact
          path="/editar/:id"
          element={
            <CrearProducto
              editar={true}
              titulo="Editar producto"
            ></CrearProducto>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;

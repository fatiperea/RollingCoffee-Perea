
import { Table, Button } from "react-bootstrap";
import ItemProducto from "./ItemProducto.jsx";
<ItemProducto className="jsx"></ItemProducto>
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {leerProduAPI} from "../../helpers/queries.js";

const Administrador = () => {
  const [productos, setProductos] = useState([]);
 
  useEffect(() => {
    traerProductos();
  }, []);

  const traerProductos=async()=>{
    try{
      const listaProduAPI= await leerProduAPI();
      setProductos(listaProduAPI);
    }catch(error){console.log(error)}
  }

  return (
    <section>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="my-4">Productos Disponibles</h1>
        <Button as={Link} to={"/administrador/crear"}>
          <i className="bi bi-file-earmark-plus-fill"></i>
        </Button>
      </div>
      <Table striped bordered hover>
        <thead className="text-center">
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Url Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
         {
            productos.map((producto)=><ItemProducto key={producto.id} producto={producto} setProductos={setProductos}></ItemProducto>)
          
         }
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;

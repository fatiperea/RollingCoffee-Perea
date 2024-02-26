import banner from "../../assets/taza.jpg";
import cafe from "../../assets/cafe.jpg";
import "../../App.css";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardProducto from "./CardProducto";
import { useState,useEffect } from "react";
import {leerProduAPI} from "../../helpers/queries"

//const imgb='https://www.istockphoto.com/es/foto/tazas-de-caf%C3%A9-gm472113574-63201109'

const Inicio = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    traerProductosInicio();
  }, []);

  const traerProductosInicio = async () => {
    try {
      const ProduInicioAPI = await leerProduAPI();
      setProductos(ProduInicioAPI);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div id="contenBanner">
        <img src={banner} alt="banner" id="imgBanner" />
      </div>
      <article>
        <h1 className="my-4">Nuestros Productos</h1>
        <Row className="mb-4">
          {
            productos.map((producto)=>  <CardProducto key={producto.id} producto={producto}></CardProducto>)
          }
          
          
        </Row>
      </article>
    </section>
  );
};

export default Inicio;

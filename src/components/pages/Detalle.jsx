//import { useParams } from "react-router";
import { useEffect, useState } from "react";
import cafe from "../../assets/cafe.jpg";
import { Image, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { leerUnProduAPI } from "../../helpers/queries";

const Detalle = () => {
  const { id } = useParams();
  const [producto, setProducto]= useState({});

  useEffect(() => {
    cargarDetalle();
  }, []);

  const cargarDetalle = async () => {
    const respuesta = await leerUnProduAPI(id);
    if (respuesta.status === 200) {

      const datoProducto= await respuesta.json();
      setProducto(datoProducto);
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: "Intentelo mas tarde",
        icon: "error",
      });
    }
  };

  return (
    <Row className="fila my-5">
      <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="col ">
        <Image src={producto.imagen} alt={producto.nombreProducto} fluid id="imgDetalle"></Image>
      </Col>
      <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="col ">
        <h3 className="m-3">{producto.nombreProducto}</h3>
        <p className="m-3"> {producto.descripcion_amplia}
          </p>
      </Col>
    </Row>
  );
};

export default Detalle;

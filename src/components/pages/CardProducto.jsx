import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProducto = ({producto}) => {
  return (
    <Col xs={12} md={6} lg={4}>
      <Card style={{ width: "18rem" }} className="mb-3">
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.nombreProducto}</Card.Title>
          <Card.Text>
            Descripcion: {producto.descripcion_breve}<br />
            <b>Precio: {producto.precio}$</b>
          </Card.Text>

          <Button className="btnColor" as={Link} to={"/detalle"}>
            Ver mas
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;

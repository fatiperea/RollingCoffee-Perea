import banner from "../../assets/taza.jpg";
import cafe from "../../assets/cafe.jpg";
import "../../App.css";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

//const imgb='https://www.istockphoto.com/es/foto/tazas-de-caf%C3%A9-gm472113574-63201109'

const Inicio = () => {

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
      <div id="contenBanner">
        <img src={banner} alt="banner" id="imgBanner" />
      </div>
      <article>
        <h1 className="my-4">Nuestros Productos</h1>
        <Row className="mb-4">
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }} className="mb-3">
              <Card.Img variant="top" src={cafe} />
              <Card.Body>
                <Card.Title>Cafe americano</Card.Title>
                <Card.Text>
                  Descripcion: <br />
                  <b>Precio: $</b>
                </Card.Text>

                <Button className="btnColor" as={Link} to={"/detalle"}>Ver mas</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }} className="mb-3">
              <Card.Img variant="top" src={cafe} />
              <Card.Body>
                <Card.Title>Cafe americano</Card.Title>
                <Card.Text>
                  Descripcion: <br />
                  <b>Precio: $</b>
                </Card.Text>
                <Button className="btnColor" as={Link} to={"/detalle"}>
                  Ver mas
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }} className="mb-3">
              <Card.Img variant="top" src={cafe} />
              <Card.Body>
                <Card.Title>Cafe americano</Card.Title>
                <Card.Text>
                  Descripcion: <br />
                  <b>Precio: $</b>
                </Card.Text>
                <Button className="btnColor" as={Link} to={"/detalle"}>Ver mas</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </article>
    </section>
  );
};

export default Inicio;

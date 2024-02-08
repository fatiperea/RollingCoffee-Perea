import img404 from "../../assets/error404.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";

const Error404 = () => {
  return (
    <section id="contenError404">
      <img src={img404} alt="img error 404" className="img-fluid"></img>
      <Button className="my-4 btnError404 fs-1" as={Link} to={'/'}>Volver <i className="bi bi-house-door-fill"></i></Button>
    </section>
  );
};

export default Error404;

import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../assets/Coffee_Logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Menu = ({ logueado, setLogueado }) => {
  
  const naveg = useNavigate();
  const logout = () => {
    sessionStorage.removeItem("InicioSesionRC");
    setLogueado("");
    naveg("/");};
  

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          {/*href="#home">*/}
          <img src={logo} alt="logo" className="img-fluid" width={200} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to={"/"}>
              Inicio
            </NavLink>

            {logueado.length > 0 ? (
              <>
                <NavLink className="nav-link" to={"/administrador"}>
                  Administrador
                </NavLink>
                <Button className="nav-link" variant="link" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <NavLink className="nav-link" to={"/login"}>
                Login
              </NavLink>
            )}

            <NavLink className="nav-link" to={"/registro"}>
              Registro
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;

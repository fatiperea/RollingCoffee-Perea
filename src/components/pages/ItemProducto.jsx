import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { borrarProductoAPI, leerProduAPI } from "../../helpers/queries";
//import {setProductos} from "../pages/Administrador"


const ItemProducto = ({ producto, setProductos }) => {
  const borrarProdu = () => {
    Swal.fire({
      title: "Estas seguro de que quieres eliminar?",
      text: "No podra revertirse!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async(result) => {
      if (result.isConfirmed) {
       const respuesta=await borrarProductoAPI(producto.id);
       if(respuesta===200)
        {
          const actualizados=await leerProduAPI();
          setProductos(actualizados);
          Swal.fire({
          title: "Producto eliminado",
          text: `El "${producto.id} "fue eliminado correctamente`,
          icon: "success",
        })}else
        {
          Swal.fire({
            title: "Ocurrio un error",
            text: `El "${producto.id} "no fue eliminado correctamente, intentelo mas tarde`,
            icon: "error",
          })
        };
      }
    });
  };

  return (
    <tr>
      <td className="text-center">{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td className="text-end">${producto.precio}</td>
      <td className="text-center">
        <img
          src={producto.imagen}
          className="img-thumbnail"
          alt="capuchino"
        ></img>
      </td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <Link variant="warning" className="me-lg-2 btn btn-warning" to={`/administrador/editar/${producto.id}`}>
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={borrarProdu}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;

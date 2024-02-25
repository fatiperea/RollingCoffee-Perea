import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProductoAPI } from "../../helpers/queries";

const ItemProducto = ({ producto }) => {
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
        {Swal.fire({
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
        <Button variant="warning" className="me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger" onClick={borrarProdu}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;

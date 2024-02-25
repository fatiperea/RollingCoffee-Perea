import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
//import { crearProductoAPI } from "../../helpers/queries";

//const CrearProducto = () => {

const CrearProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const productoValidado = (producto) => {
    const productoValidado = async (producto) => {
      console.log(producto);
      /*const respuesta = await crearProductoAPI(producto);
      if (respuesta.status === 201) {
        //mensaje para el usuario
        console.log("producto creado");
        reset();
      } else {
        console.log("ocurrio un error");
      }*/
    };
  };

  return (
    <section>
      <h1>Nuevo Producto</h1> <hr />
      <Form className="my-4" onSubmit={handleSubmit(productoValidado)}>
        <Form.Group className="mb-3" controlId="formProdu">
          <Form.Label>Producto *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Producto"
            //maxLength={20}
            //minLength={5}
            {...register("nombreProducto", {
              required: "El nombre de producto es obligatorio",
              minLength: { value: 2, message: "2 caracteres minimo" },
              maxLength: { value: 30, message: "30 caracteres maximo" },
            })}
            
          />
          <Form.Text className="text-danger">{errors.nombreProducto?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio *</Form.Label>
          <Form.Control
            type="number"
            placeholder="Precio"
            maxLength={4}
            minLength={3}
            //required
            {...register("precio", {
              required: "El precio del producto es obligatorio",
              min: { value: 300, message: "$300 es el monto minimo" },
              max: { value: 100000, message: "$100000 es el monto maximo" },
            })}
          />
          <Form.Text className="text-danger">{errors.precio?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImg">
          <Form.Label>Imagen URL *</Form.Label>
          <Form.Control
            type="text"
            placeholder="URL"
            maxLength={50}
            minLength={10}
            //required
            {...register("imagen", {
              required: "La imagen del producto es obligatoria",
              minLength: { value: 10, message: "10 caracteres minimo" },
              maxLength: { value: 50, message: "50 caracteres maximo" },
            })}
          />
          <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCateg">
          <Form.Label>Categoría *</Form.Label>
          <Form.Select aria-label="" required>
            <option>Seleccionar opción</option>
            <option value="1">Dulce</option>
            <option value="2">Salado</option>
            <option value="3">Mixto</option>
          </Form.Select>
          <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescrip">
          <Form.Label>Descripcion Breve *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Descripcion Breve"
            as="textarea"
            rows={2}
            //required
            {...register("descripcion_breve", {
              required: "La descripcion del producto es obligatorio",
              minLength: { value: 20, message: "20 caracteres minimo" },
              maxLength: { value: 50, message: "50 caracteres maximo" },
            })}
          />
          <Form.Text className="text-danger">{errors.descripcion_breve?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescripAmplia">
          <Form.Label>Descripcion Amplia *</Form.Label>
          <Form.Control as="textarea" rows={3} //required 
          {...register("descripcion_amplia", {
            required: "La descripcion amplia del producto es obligatoria",
            minLength: { value: 30, message: "30 caracteres minimo" },
            maxLength: { value: 60, message: "60 caracteres maximo" },
          })}
          />
          <Form.Text className="text-danger">{errors.descripcion_amplia?.message}</Form.Text>
        </Form.Group>

        <Button className="btnColor" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default CrearProducto;

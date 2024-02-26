import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearProductoAPI, leerUnProduAPI, editarProductoAPI } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useParams } from "react-router";

const CrearProducto = ({ editar, titulo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();

  const { id } = useParams();

  useEffect(() => {
    
    if (editar) {
      
      cargarForm();
    }
  }, []);

  const cargarForm = async () => {
    console.log("ESTE ES EL ID",id);
    const respuesta = await leerUnProduAPI(id);
    if(respuesta.status === 200)
    {
      const buscado=await respuesta.json();
      console.log("buscado: ",buscado);
      setValue("nombreProducto", buscado.nombreProducto);
      setValue("precio", buscado.precio);
      setValue("categoria",buscado.categoria);
      setValue("descripcion_breve", buscado.descripcion_breve);
      setValue("descripcion_amplia", buscado.descripcion_amplia);
      setValue("imagen",buscado.imagen);

      console.log("buscado ",buscado);

    }else
    {
      Swal.fire({
        title: "Ocurrio un error",
        text: "Intentelo mas tarde",
        icon: "error",
      });
    }
  };

  const productoValidado = async (producto) => {
    //console.log(producto);
    if (editar) {
      const respuesta = await editarProductoAPI(id, producto);
    } else {
      const respuesta = await crearProductoAPI(producto);
      if (respuesta.status === 201) {
        //mensaje para el usuario
        //console.log("producto creado");
        Swal.fire({
          title: "Producto creado",
          text: `El producto" ${producto.nombreProducto}" fue creado correctamente`,
          icon: "success",
        });
        reset();
      } else {
        //console.log("ocurrio un error");
        Swal.fire({
          title: "Ocurrio un error",
          text: "Intentelo mas tarde",
          icon: "error",
        });
      }
    }
  };

  return (
    <section>
      <h1>{titulo}</h1> <hr />
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
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
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
              min: { value: 100, message: "$100 es el monto minimo" },
              max: { value: 10000, message: "$10000 es el monto maximo" },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImg">
          <Form.Label>Imagen URL *</Form.Label>
          <Form.Control
            type="text"
            placeholder="URL"
            maxLength={100}
            minLength={10}
            //required
            {...register("imagen", {
              required: "La URL de imagen del producto es obligatoria",
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
              },
              message: "Ingresar URL valida (jpg|jpeg|gif|png)",
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCateg">
          <Form.Label>Categoría *</Form.Label>
          <Form.Select
            aria-label=""
            required
            {...register("categoria", {
              required: "La categgoría del producto es obligatoria",
            })}
          >
            <option value="">Seleccionar opción</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
            <option value="infusiones">Infusiones</option>
            <option value="batidos">Batidos</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
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
              minLength: { value: 5, message: "5 caracteres minimo" },
              maxLength: { value: 50, message: "50 caracteres maximo" },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_breve?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescripAmplia">
          <Form.Label>Descripcion Amplia *</Form.Label>
          <Form.Control
            as="textarea"
            rows={3} //required
            {...register("descripcion_amplia", {
              required: "La descripcion amplia del producto es obligatoria",
              minLength: { value: 30, message: "30 caracteres minimo" },
              maxLength: { value: 150, message: "60 caracteres maximo" },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_amplia?.message}
          </Form.Text>
        </Form.Group>

        <Button className="btnColor" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default CrearProducto;

import { Form, Button } from "react-bootstrap";

const CrearProducto = () => {
  return (
    <section>
      <h1>Nuevo Producto</h1> <hr />
      <Form className="my-4">
        <Form.Group className="mb-3" controlId="formProdu">
          <Form.Label>Producto *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Producto"
            maxLength={20}
            minLength={5}
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio *</Form.Label>
          <Form.Control
            type="number"
            placeholder="Precio"
            maxLength={4}
            minLength={3}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Imagen URL *</Form.Label>
          <Form.Control
            type="text"
            placeholder="URL"
            maxLength={50}
            minLength={10}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCateg">
          <Form.Label>Categoria *</Form.Label>
          <Form.Select aria-label="" required>
            <option>Seleccionar opcion</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescrip">
          <Form.Label>Descripcion Breve *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Descripcion Breve"
            as="textarea"
            rows={2}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescripAmplia">
          <Form.Label>Descripcion Amplia *</Form.Label>
          <Form.Control as="textarea" rows={3} required />
        </Form.Group>

        <Button className="btnColor" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default CrearProducto;

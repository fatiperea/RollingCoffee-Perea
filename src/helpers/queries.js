const URI_PRODUCTOS = import.meta.env.VITE_API_PRODUCTOS;

//POST
export const crearProductoAPI = async (productoNuevo) => {
  try {
    const respuesta = await fetch(URI_PRODUCTOS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoNuevo),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//GET
export const leerProduAPI = async () => {
  try {
    const respuesta = await fetch(URI_PRODUCTOS);

    console.log(respuesta);

    const listaProdu = await respuesta.json();
    console.log(listaProdu);
    return listaProdu;
  } catch (error) {
    console.log(error);
  }
};

// DELETE
export const borrarProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_PRODUCTOS}/${id}`, {
      method: "DELETE",
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

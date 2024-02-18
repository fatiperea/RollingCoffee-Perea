const URI_PRODUCTOS = import.meta.env.VITE_API_PRODUCTOS;

console.log("hola");

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

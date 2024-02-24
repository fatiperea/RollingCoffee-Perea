const URI_PRODUCTOS = import.meta.env.VITE_API_PRODUCTOS;

console.log("hola");


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

  //POST
  /*export const crearProductoAPI = async(productoNuevo)=>{
    try {
        const respuesta = await fetch(URI_PRODUCTOS, {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(productoNuevo)
        })
        console.log(respuesta);
        return respuesta
    } catch (error) {
        console.log(error)
    }
  }*/
  
  
};

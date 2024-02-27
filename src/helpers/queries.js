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
    //console.log(respuesta);
    return respuesta;
  } catch (error) {
    //console.log(error);
  }
};

//GET
export const leerProduAPI = async () => {
  try {
    const respuesta = await fetch(URI_PRODUCTOS);

    //console.log(respuesta);

    const listaProdu = await respuesta.json();
    //console.log(listaProdu);
    return listaProdu;
  } catch (error) {
    //console.log(error);
  }
};

export const leerUnProduAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_PRODUCTOS}/${id}`);

    return respuesta;
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
    //console.log(respuesta);
    return respuesta;
  } catch (error) {
    //console.log(error);
  }
};
//PUT
export const editarProductoAPI = async(id, producto) =>{
  try {
      const respuesta = await fetch(`${URI_PRODUCTOS}/${id}`,{
          method: "PUT",
          headers:{
              "Content-Type":"application/json"
          },
          body: JSON.stringify(producto)
      })
      //console.log(respuesta);
      return respuesta;
  } catch (error) {
      console.log(error)
  }
}

const admin={
  email:"admin@rollingcode.com",
  password:"123Aa123",
}

export const login=(usuario)=> {

  if(usuario.email === admin.email && usuario.password === admin.password)
  {
    sessionStorage.setItem("InicioSesionRC", JSON.stringify(usuario.email));
    return true
  }else return false;
}
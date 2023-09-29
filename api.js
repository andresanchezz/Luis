import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";
const baseUrl = 'http://34.201.65.101/usuarios'


//FUNCION TRAER REGISTROS
export const getData = async () => {
  try {
    const response = await axios.get(baseUrl);
    const data = await response.data;
    console.log("get", data);
    return data
  } catch (error) {
    console.log("El error fue:", error);
  }
};

//FUNCION PARA ENVIAR REGISTRO
export const postData = async (dataUser) => {
  try {
    const response = await axios.post(baseUrl, dataUser);
    const data = await response.data;
    console.log("post", data);
  } catch (error) {
    console.log("El error fue:", error);
  }
};

//FUNCION EDITAR REGISTROS
export const putData = async (dataUser) => {
  try {
    const response = await axios.post(baseUrl, dataUser);
    const data = await response.data;
    console.log("post", data);
  } catch (error) {
    console.log("El error fue:", error);
  }
};
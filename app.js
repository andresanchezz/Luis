import {getData, postData, putData} from "./api.js"
import {showLoadingScreen, hideLoadingScreen} from './axiosInterceptor.js'

//SELECCIONAR LA TABLA DONDE SE AGREGARÁ LA INFORMACIÓN
const usersTableDiv = document.querySelector("#users-table");
//INSERTAR INFORMACIÓN A LA TABLA
const listUsers = async() => {
  //TRAER DATA DEL API GET
  let data = await getData()
  //PLANTILLA BASE
  let html = `

  <table class="table text-center">
  <thead>
    <tr class="table-dark sticky-top">
      <th scope="col">Id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Documento</th>
      <th scope="col">Fecha</th>
      <th scope="col">Género</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
  
  `;
  //CUANDO YA HAYA DATA
  if(data){
    //SE EXTRAEN LOS USUARIOS Y SE AGREGAN CAMPOS A LA PLANTILLA BASE
    data.content.forEach((element) => {
      html += `
      <tr class="text-capitalize">
      <th scope="row">${element.id}</th>
      <td>${element.nombre}</td>
      <td>${element.documento}</td>
      <td>${element.data}</td>
      <td>${element.genero}</td>
      <td>
      <i class="fa-regular fa-trash-can mx-3"></i>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
      </td>
    </tr>`;
    });
  }
  //SE AGREGAN AL HTML
  usersTableDiv.innerHTML = html;
};

//REGISTRAR UN NUEVO USUARIO
const formRegisterUser = document.querySelector('#register-new-user');
//ESCUCHAR CLICK DEL FORMULARIO
formRegisterUser.addEventListener("submit", async(e)=>{
  //EVITAR QUE SE RECARGE LA PÁGINA
  e.preventDefault()
  //TRAER DATA DEL FORMULARIO
  let dataForm = Object.fromEntries(new FormData(e.target))
  //COLOCAR FECHA DE REGISTRO
  dataForm.data = new Date()
  //LLAMADO AL API PARA REGISTRARLO Y SE LE ENVÍA LA DATA DEL FORMULARIO
  await postData(dataForm)
  //VOLVER A LLAMAR EL LISTADO PARA ACTUALIZAR SIN RECARGAR
  listUsers();
});

//EDITAR USUARIO
const editUser = async()=>{

}





listUsers();
// Backticks
const crearNuevaLinea = (nombre, email) => {
  const linea = document.createElement("tr");
  const contenido = `
    <td class="td" data-td>${nombre}</td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button"
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>
  `;
  linea.innerHTML = contenido;      // Incrusto el html en tr
  return linea;
};

const table = document.querySelector("[data-table]");  // Busca a: <tbody data-table></tbody>
// Abrir http(metodo, url)
// CRUD - Metodos HTTP
// Create  - POST
// Read    - GET
// Update  - PUT/PATF
// Delete  - DELETE
const listaClientes = () => fetch("http://localhost:3000/perfil").then(respuesta=> respuesta.json());

  // return fetch("http://localhost:3000/perfil").then(respuesta=> {
  //   return respuesta.json();
  // });

  // const listaClientes = () => {
  // Antes se hacia asi:
  // const promise = new Promise((resolve, reject)=> {
  //   const http = new XMLHttpRequest();
  //   http.open("GET", "http://localhost:3000/perfil");
  //   http.send();           // Enviamos la peticion al servidor
  //   http.onload = () => {
  //     const response = JSON.parse(http.response); 
  //     if(http.status >=400){
  //       reject(response);
  //     } else{
  //       resolve(response)
  //     }
  //   } // Respuesta del servidor (despues de cargar, obtengo esto)
  // })
  // return promise;
  // };

listaClientes()
  .then(data => {
    data.forEach(perfil => {
      const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
      table.appendChild(nuevaLinea);  // Agrego un hijo
    });
  })
  .catch((error)=> alert("Ocurrio un error"));




// Elemento Original:
// <tr>
//   <td class="td" data-td>Gabriela</td>
//   <td>gabriela@alura.com</td>
//   <td>
//     <ul class="table__button-control">
//       <li>
//         <a
//           href="../screens/editar_cliente.html"
//           class="simple-button simple-button--edit"
//           >Editar</a
//         >
//       </li>
//       <li>
//         <button
//           class="simple-button simple-button--delete"
//           type="button"
//         >
//           Eliminar
//         </button>
//       </li>
//     </ul>
//   </td>
// </tr>

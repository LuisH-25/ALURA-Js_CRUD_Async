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

const http = new XMLHttpRequest();

// Abrir http(metodo, url)
// CRUD - Metodos HTTP
// Create  - POST
// Read    - GET
// Update  - PUT/PATF
// Delete  - DELETE
http.open("GET", "http://localhost:3000/perfil")
http.send()           // 
http.onload = () => {
  const data = JSON.parse(http.response);
  console.log(data);
  data.forEach(perfil => {
    const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
    table.appendChild(nuevaLinea);  // Agrego un hijo
  });
} // Respuesta del servidor (despues de cargar, obtengo esto)
console.log(http);




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

//---------------== VARIABLES==------------------

let nombre = document.getElementById('firstName').value;
let apellido = document.getElementById('lastName').value;
let apartamento = document.getElementById('Apartment').value;
const row = document.createComment('tr');



    const buttonAgregar = document.getElementById('btn-success')
    
    buttonAgregar.addEventListener('click',event=>{


        row.innerHTML = `

        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${apartamento}</td>
        <td>

            <a href="" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="" class="btn btn-danger btn-sm edit">Delete</a>
            
        </td>`;

        
        let lista = document.getElementById('people-list');
        lista.appendChild(row);
        
        
    })

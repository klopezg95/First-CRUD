var selectedRow = null;

//-----------=== ALERTAS ===----------
function showAlert(message,className){
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;

    // poner la alerta antes del main
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container')
    const main = document.querySelector('.main')
    container.insertBefore(div,main);

    setTimeout(()=> document.querySelector('.alert').remove(),3000);
    
}

// REINICIAR LOS INPUTS
function Limpiar(){
    document.querySelector('#firstName').value = "";
    document.querySelector('#lastName').value = "";
    document.querySelector('#Apartment').value = "";
}
// ----------===AGREGAR UNA PERSONA===-------------------- 13:36
document.querySelector('#apartment-form').addEventListener('submit',(e)=>{
    e.preventDefault();

//-----Obetener los valores del formulario    
const firstName = document.querySelector('#firstName').value;
const lastName = document.querySelector('#lastName').value;
const Apartment = document.querySelector('#Apartment').value;

//---validar datos
if(firstName == "" || lastName == "" || Apartment == ""){
    showAlert("Todos los campos son obligatorios", "danger");
}
else{
    if(selectedRow == null){
        const list = document.querySelector("#people-list");
        const row = document.createElement("tr");
        
        row.innerHTML= `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${Apartment}</td>
        <td>
            <a href="" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="" class="btn btn-danger btn-sm delete">Delete</a>
        </td>
        `;
        list.appendChild(row);
        selectedRow = null;
        showAlert("Persona Agregada","success");
    }else{
        
            selectedRow.children[0].textContent = firstName;
            selectedRow.children[1].textContent = lastName;
            selectedRow.children[2].textContent = Apartment;
            selectedRow = null;
            showAlert("Informacion de persona actualizada", "info")
        }
        Limpiar();
    }
});

//-----------==== EDITAR ===--------------
document.querySelector('#people-list').addEventListener('click', (e)=>{
    target = e.target;
    if(target.classList.contains('edit')){
        selectedRow = target.parentElement.parentElement;
        document.querySelector('#firstName').value = selectedRow.children[0].textContent;
        document.querySelector('#lastName').value = selectedRow.children[1].textContent;
        document.querySelector('#Apartment').value = selectedRow.children[2].textContent;

    }

});

//------------=== DELETE ===--------------------
document.querySelector('#people-list').addEventListener('click',e =>{
    target = e.target;
    if(target.classList.contains('delete')){
        target.parentElement.parentElement.remove();
        showAlert("Arrendatario eliminado", "danger");

    }
});




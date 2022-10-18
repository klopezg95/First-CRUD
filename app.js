function insertarNombre(){
    let nombre = document.getElementById('nombre').value;
    let div = document.createElement('div');
    div.appendChild(nombre);
    document.body.appendChild(div);

    // const buttonAgregar = document.getElementById('btn-primary')

    // buttonAgregar.addEventListener('click',event=>{
    //     insertarNombre();
    // })
}
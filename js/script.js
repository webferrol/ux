//Scritp 1 utiliza toggle para que al pulsar el primer enlace con nombre de clase "boton" añada al segundo formulario el nombre de clase "enlinea"

document.addEventListener("DOMContentLoaded",e=>{

    document.querySelectorAll(".boton")[0].addEventListener("click",e=>{
        e.preventDefault();

        document.querySelector(".f2").classList.toggle("enlinea");
    })

});

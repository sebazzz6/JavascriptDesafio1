var formulario = document.querySelector("form");
formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    let color = document.querySelector("#color").value;
    let valor = document.querySelector("#precio").value;
    let cantidad = document.querySelector("#cant").value;
    document.querySelector("#total").innerHTML = '$' + (cantidad * valor).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + ' => Precio Ingresado: $' + valor.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    document.querySelector("#cantidadSel").innerHTML = cantidad;
    document.querySelector("#circulo").style.backgroundColor = color;
    document.querySelector("#imagenNotebook").src = 'assets/img/note'+color+'.png';
});


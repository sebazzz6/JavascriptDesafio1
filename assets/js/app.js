var formulario = document.querySelector("form");
formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    let color = document.querySelector("#color").value;
    let valor = document.querySelector("#precio").value;
    let cantidad = document.querySelector("#cant").value;
    document.querySelector("#total").innerHTML = '$' + (cantidad * valor).toLocaleString() + ' => Precio Ingresado: $' + Number(valor).toLocaleString();
    document.querySelector("#cantidadSel").innerHTML = cantidad;
    document.querySelector("#circulo").style.backgroundColor = color;
    document.querySelector("#imagenNotebook").src = 'assets/img/note'+color+'.png';
});
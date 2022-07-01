const valor = "400000";
var formulario = document.querySelector("form");

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    let color = document.getElementById("color").value;
    let cantidad = document.getElementById("cant").value;
    let total = cantidad * valor;
    let cadena = '<p>Total: $' + total + '</p>';
    cadena += '<p>Cantidad: $' + cantidad + '</p>';
    document.getElementById("total").innerHTML = cadena;
    document.getElementById("imagenNotebook").src = 'assets/img/note'+color+'.png';
});

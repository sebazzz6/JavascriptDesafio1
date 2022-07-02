var form = document.querySelector("form");
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    let colour = document.querySelector("#colour").value;
    let price = document.querySelector("#price").value;
    let quantity = document.querySelector("#quantity").value;
    document.querySelector("#total").innerHTML = '$' + Number(quantity * price).toLocaleString() + ' => Precio Ingresado: $' + Number(price).toLocaleString();
    document.querySelector("#quantitySelect").innerHTML = quantity;
    document.querySelector("#circle").style.backgroundColor = colour;
    document.querySelector("#imageNotebook").src = 'assets/img/note'+colour+'.png';
});
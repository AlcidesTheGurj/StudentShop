var localProducts =  JSON.parse(localStorage.product);
var quantity = 0;
localProducts.forEach(product=>{
    document.getElementById("products").innerHTML +=
        "<div class='individualProducts'>"
        +"<br>"
        +"<br>"
        +quantity
        +"</div>"
        +"<div>"
        +"<img src=' "+product.source+" ' width ='75' height='75' alt='logo'>"
        +"</div>"
        +"<div class='individualProducts' id='cartDescription'>"
        +"<br>"
        +"<br>"
        +product.type
        +"</div>"
        +"<div class='individualProducts'>"
        +"<br>"
        +"<br>"
        +product.price
        +"</div>";
    quantity++;

});
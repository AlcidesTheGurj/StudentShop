/*Load product from session storage*/
var item = JSON.parse(sessionStorage.item);

document.getElementById("object").innerHTML +=
    "<div class='image'>"
    +"<img src=' "+item.source+" ' width ='700' height='700' alt='logo' id='sessionImage'>"
    +"<div class='sessionProductText'>"
    + "<h2>"+item.type
    +"<br>"
    +"</h2>"
    +"<br>"+"<p class='sessionText'>"+item.description+"</p>"
    +"<p><b>"+item.price+"</b></p>"
    +"<div class='buyButton'>"
    +"<button onclick='buyFunction()'>Buy</button>"
    +"</div>"
    +"</div>";


function buyFunction(){
    alert('Item added to cart!')

}
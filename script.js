/*Burger menu function*/
function menuFunction(){
    let menu = document.getElementById('hiddenNav');
    if (menu.className === "hiddenNav") {
        menu.className += " appear";
    } else {
        menu.className = "hiddenNav";
    }
}


var hoodies = [
    {  type:"UCLan Hoodie (1)- Purple",
        description:"cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99",
        source: "items/hoodies/hoodie(1).jpg"
    },
    {
        type:"UCLan Hoodie",
        color:"Light Blue",
        description:"cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99",
        source: "items/hoodies/hoodie(2).jpg"
    },
    {
        type:"UCLan Hoodie",
        color:"Green",
        description:"cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(3).jpg",
    },
    {
        type:"UCLan Hoodie",
        color:"Dark Grey",
        description:"cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(4).jpg",
    },
    {
        type:"UCLan Hoodie",
        color:"Black",
        description:"cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(5).jpg",
    },
    {
        type:"UCLan Hoodie",
        color:"Salmon",
        description:"cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(6).jpg",
    },
    {
        type:"UCLan Hoodie",
        color:"Burgundy",
        description:"cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(7).jpg",
    },
    {
        type:"UCLan Hoodie",
        color:"Light Grey",
        description:"cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(8).jpg",
    },
    {
        type:"UCLan Hoodie",
        color:"Slate Blue",
        description:"cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(9).jpg",
    },
]
var tShirts = [
    {
        type:"UCLan Logo T-shirt (1) - Navy Blue",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(1).jpg"
    },
    {
        type:"UCLan Logo T-shirt (2) - Rusty Red",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(2).jpg"
    },
    {
        type:"UCLan Logo T-shirt (3) - Burgundy",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(3).jpg"
    },
    {
        type:"UCLan Logo T-shirt (4) - Pink",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(4).jpg"
    },
    {
        type:"UCLan Logo T-shirt (5) - Teal",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(5).jpg"
    },
    {
        type:"UCLan Logo T-shirt (6) - Black",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(6).jpg"
    },
    {
        type:"UCLan Logo T-shirt (7) - Old Red",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(7).jpg"
    },
    {
        type:"UCLan Logo T-shirt (8) - Grey",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(8).jpg"
    },
    {
        type:"UCLan Logo T-shirt (9) - Red",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(9).jpg"
    },
    {
        type:"UCLan Logo T-shirt (10) - Pdark Purple",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(10).jpg"
    },
    {
        type:"UCLan Logo T-shirt (11) - Yellow",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(11).jpg"
    },
    {
        type:"UCLan Logo T-shirt (12) - Mustard Yellow",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(12).jpg"
    },
    {
        type:"UCLan Logo T-shirt (13) - Dark Grey",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(13).jpg"
    },
    {
        type:"UCLan Logo T-shirt (14) - Dark Green",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(14).jpg"
    },
    {
        type:"UCLan Logo T-shirt (15) - Bright Green",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(15).jpg"
    },
    {
        type:"UCLan Logo T-shirt (16) - Olive Green",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(16).jpg"
    },
    {
        type:"UCLan Logo T-shirt (17) - Dark Grey",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(17).jpg"
    },
    {
        type:"UCLan Logo T-shirt (18) - Orange",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(18).jpg"
    },
    {
        type:"UCLan Logo T-shirt (19) - Purple",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(19).jpg"
    },
    {
        type:"UCLan Logo T-shirt (20) - Slate Blue",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(20).jpg"
    },
    {
        type:"UCLan Logo T-shirt (21) - Bright Pink",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(21).jpg"
    },
    {
        type:"UCLan Logo T-shirt (22) - Birghtly Green",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(22).jpg"
    },
    {
        type:"UCLan Logo T-shirt (23) - Lime Green",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(23).jpg"
    },
    {
        type:"UCLan Logo T-shirt (24) - Ocean Blue",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(24).jpg"
    },
    {
        type:"UCLan Logo T-shirt (25) - Dark Red",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(25).jpg"
    },
    {
        type:"UCLan Logo T-shirt (26) - Another Green",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(26).jpg"
    },
    {
        type:"UCLan Logo T-shirt (27) - Slate Grey",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(27).jpg"
    },
    {
        type:"UCLan Logo T-shirt (28) - Bright Orange",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(28).jpg"
    },
    {
        type:"UCLan Logo T-shirt (29) - Another Purple",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(29).jpg"
    },
    {
        type:"UCLan Logo T-shirt (30) - Real Red",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(30).jpg"
    },
    {
        type:"UCLan Logo T-shirt (31) - Brilliant Blue",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(31).jpg"
    },
    {
        type:"UCLan Logo T-shirt (32) - Creame",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(32).jpg"
    },
    {
        type:"UCLan Logo T-shirt (33) - Teal Blue",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(33).jpg"
    },
    {
        type:"UCLan Logo T-shirt (34) - White",
        description:"cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        source: "items/tshirt/tshirt(34).jpg"
    },


]

var i=0;
/*Adding all t-shirts*/
tShirts.forEach(
    tshirt => {
        /* First t-shirt added separately with id for jump menu*/
        if(tshirt.type==="UCLan Logo T-shirt (1) - Navy Blue"){
            document.getElementById("clothes").innerHTML +=
                "<div class='image' id='t-shirts'>"
                + "<img src=' " + tShirts[i].source + " ' width ='200' height='200' alt='logo' id='newImage'>"
                + "<div class='productText'>"
                + "<h2>" + tShirts[i].type
                + "<br>"
                + "</h2>"
                + "<br>" + "<p class='description'>" + tShirts[i].description +
                "<br>"
                + "<a href=item.html onclick='itemFunction("+i+")'>Read more</a>"
                + "</p>"
                + "<p><b>" + tShirts[i].price + "</b> </p>"
                + "<div class='buyButton'>"
                + "<button onclick='buyFunction()'>Buy</button>"
                + "</div>"
                + "</div>";
        }
        else {
            document.getElementById("clothes").innerHTML +=
                "<div class='image'>"
                + "<img src=' " + tShirts[i].source + " ' width ='200' height='200' alt='logo' id='newImage'>"
                + "<div class='productText'>"
                + "<h2>" + tShirts[i].type
                + "<br>"
                + "</h2>"
                + "<br>" + "<p class='description'>" + tShirts[i].description +
                "<br>"
                + "<a href=item.html onclick='itemFunction(" + i + ")'>Read more</a>"
                + "</p>"
                + "<p><b>" + tShirts[i].price + "</b> </p>"
                + "<div class='buyButton'>"
                + "<button onclick='buyFunction()'>Buy</button>"
                + "</div>"
                + "</div>";
        }
        i++;

    });

var j=0;
hoodies.forEach(
    hoodie => {
        document.getElementById("clothes").innerHTML +=
            "<div class='image'>"
            + "<img src=' " + hoodies[j].source + " ' width ='200' height='200' alt='logo' id='newImage'>"
            + "<div class='productText'>"
            + "<h2>" + hoodies[j].type
            + "<br>"
            + "</h2>"
            + "<br>" + "<p class='description'>" + hoodies[j].description +
            "<br>"
            + "<a href=item.html onclick='itemFunction("+j+")'>Read more</a>"
            + "</p>"
            + "<p><b>" + hoodies[j].price + "</b> </p>"
            + "<div class='buyButton'>"
            + "<button onclick='buyFunction()'>Buy</button>"
            + "</div>"
            + "</div>";
        j++;

    });





/*Save to session storage function*/
function itemFunction(num){
    sessionStorage.setItem('item',JSON.stringify(tShirts[num]));
}

function buyFunction(){
    alert('Item added to cart!')

}
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
    {   type: "UCLan Hoodie (1) - Purple",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99",
        source: "items/hoodies/hoodie(1).jpg"
    },
    {
        type:"UCLan Hoodie (2) - Light Blue",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99",
        source: "items/hoodies/hoodie(2).jpg"
    },
    {
        type:"UCLan Hoodie (3) - Green",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(3).jpg",
    },
    {
        type:"UCLan Hoodie (4) - Dark Grey",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(4).jpg",
    },
    {
        type:"UCLan Hoodie (5) - Black",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(5).jpg",
    },
    {
        type:"UCLan Hoodie (6) - Salmon",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(6).jpg",
    },
    {
        type:"UCLan Hoodie (7) - Burgundy",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(7).jpg",
    },
    {
        type:"UCLan Hoodie (8) - Light Grey",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(8).jpg",
    },
    {
        type:"UCLan Hoodie (9) - Slate Blue",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(9).jpg",
    },
    {
        type:"UCLan Hoodie (10) - Orange",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(10).jpg",
    },
    {
        type:"UCLan Hoodie (11) - Teal",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(11).jpg",
    },
    {
        type:"UCLan Hoodie (12) - Navy",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(12).jpg",
    },
    {
        type:"UCLan Hoodie (13) - Orange",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(13).jpg",
    },
    {
        type:"UCLan Hoodie (14) - Creame",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(14).jpg",
    },
    {
        type:"UCLan Hoodie (15) - Lime",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(15).jpg",
    },
    {
        type:"UCLan Hoodie (16) - Off Blue",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(16).jpg",
    },
    {
        type:"UCLan Hoodie (17) - Red",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(17).jpg",
    },
    {
        type:"UCLan Hoodie (18) - Charcoal",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(18).jpg",
    },
    {
        type:"UCLan Hoodie (19) - Navy Blue",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(19).jpg",
    },
    {
        type:"UCLan Hoodie (20) - Lighter Grey",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(20).jpg",
    },
    {
        type:"UCLan Hoodie (21) - New Blue",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(21).jpg",
    },
    {
        type:"UCLan Hoodie (22) - Forest Green",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(22).jpg",
    },
    {
        type:"UCLan Hoodie (23) - Ocean Blue",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(23).jpg",
    },
    {
        type:"UCLan Hoodie (24) - Pink",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(24).jpg",
    },
    {
        type:"UCLan Hoodie (25) - Orange new",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price:"£39.99",
        source:"items/hoodies/hoodie(25).jpg",
    },
    {
        type:"UCLan Hoodie (26) - Black",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99",
        source: "items/hoodies/hoodie(26).jpg"
    },
    {
        type:"UCLan Hoodie (27) - Light Off Grey",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99",
        source: "items/hoodies/hoodie(27).jpg"
    },
    {
        type:"UCLan Hoodie (28) - Rusty Red",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99",
        source: "items/hoodies/hoodie(28).jpg"
    },
    {
        type:"UCLan Hoodie (29) - Slate Grey",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99",
        source: "items/hoodies/hoodie(29).jpg"
    },
    {
        type:"UCLan Hoodie (30) - Bright Green",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99",
        source: "items/hoodies/hoodie(30).jpg"
    },
    {
        type:"UCLan Hoodie (31) - Bright Pink",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99",
        source: "items/hoodies/hoodie(31).jpg"
    },
    {
        type:"UCLan Hoodie (32) - Burgundy New",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99",
        source: "items/hoodies/hoodie(32).jpg"
    },
    {
        type:"UCLan Hoodie (33) - Navy New",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99",
        source: "items/hoodies/hoodie(33).jpg"
    },
    {
        type:"UCLan Hoodie (34) - Bright Green",
        description:"cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99",
        source: "items/hoodies/hoodie(34).jpg"
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
var jumpers = [
    {
        type:"UCLan Logo Jumper (1) - Purple",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(1).jpg"
    },
    {
        type:"UCLan Logo Jumper (2) - Rusty Red",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(2).jpg"
    },
    {
        type:"UCLan Logo Jumper (3) - Water Blue",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(3).jpg"
    },
    {
        type:"UCLan Logo Jumper (4) - White",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(4).jpg"
    },
    {
        type:"UCLan Logo Jumper (5) - Pink",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(5).jpg"
    },
    {
        type:"UCLan Logo Jumper (6) - Black",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(6).jpg"
    },
    {
        type:"UCLan Logo Jumper (7) - Old Blue",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(7).jpg"
    },
    {
        type:"UCLan Logo Jumper (8) - Dark Grey",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(8).jpg"
    },
    {
        type:"UCLan Logo Jumper (9) - Red",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(9).jpg"
    },
    {
        type:"UCLan Logo Jumper (10) - Brown",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(10).jpg"
    },
    {
        type:"UCLan Logo Jumper (11) - Green",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(11).jpg"
    },
    {
        type:"UCLan Logo Jumper (12) - Dark Red",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(12).jpg"
    },
    {
        type:"UCLan Logo Jumper (13) - Yellow",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(13).jpg"
    },
    {
        type:"UCLan Logo Jumper (14) - Light Grey",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(14).jpg"
    },
    {
        type:"UCLan Logo Jumper (15) - Light Green",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(15).jpg"
    },
    {
        type:"UCLan Logo Jumper (16) - Old Red",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(16).jpg"
    },
    {
        type:"UCLan Logo Jumper (17) - Light Purple",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(17).jpg"
    },
    {
        type:"UCLan Logo Jumper (18) - Slate Blue",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(18).jpg"
    },
    {
        type:"UCLan Logo Jumper (19) - Real Red",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(19).jpg"
    },
    {
        type:"UCLan Logo Jumper (20) - Old Pink",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(20).jpg"
    },
    {
        type:"UCLan Logo Jumper (21) - Slate Grey",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(21).jpg"
    },
    {
        type:"UCLan Logo Jumper (22) - Bright Green",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(22).jpg"
    },
    {
        type:"UCLan Logo Jumper (23) - Teal",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(23).jpg"
    },
    {
        type:"UCLan Logo Jumper (24) - Sky Blue",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(24).jpg"
    },
    {
        type:"UCLan Logo Jumper (25) - Sunshine Pink",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(25).jpg"
    },
    {
        type:"UCLan Logo Jumper (26) - Bronze",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(26).jpg"
    },
    {
        type:"UCLan Logo Jumper (27) - Olive Green",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(27).jpg"
    },
    {
        type:"UCLan Logo Jumper (28) - Bright White Green",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(28).jpg"
    },
    {
        type:"UCLan Logo Jumper (29) - Navy Blue",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(29).jpg"
    },
    {
        type:"UCLan Logo Jumper (30) - Rusty Orange",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(30).jpg"
    },
    {
        type:"UCLan Logo Jumper (31) - Bright Orange",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(31).jpg"
    },
    {
        type:"UCLan Logo Jumper (32) - Sky Purple",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(32).jpg"
    },
    {
        type:"UCLan Logo Jumper (33) - Really Red",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(33).jpg"
    },
    {
        type:"UCLan Logo Jumper (34) - Plum Purple",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(34).jpg"
    },
    {
        type:"UCLan Logo Jumper (35) - Dark Purple",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(35).jpg"
    },
    {
        type:"UCLan Logo Jumper (36) - Vibrant Red",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(36).jpg"
    },
    {
        type:"UCLan Logo Jumper (37) - Ocean Blue",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(37).jpg"
    },
    {
        type:"UCLan Logo Jumper (38) - Creame",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(38).jpg"
    },
    {
        type:"UCLan Logo Jumper (39) - Lighter Blue",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(39).jpg"
    },
    {
        type:"UCLan Logo Jumper (40) - Light Grey",
        description:"cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        source: "items/jumpers/jumper(40).jpg"
    },




]


/*Adding all t-shirts*/
/*i used as index for read more function*/
var i=0;
tShirts.forEach(
    shirts => {
        /* First t-shirt added separately with id for jump menu*/
        if(shirts.type==="UCLan Logo T-shirt (1) - Navy Blue"){
            document.getElementById("clothes").innerHTML +=
                "<div class='image' id='t-shirts'>"
                + "<img src=' "+shirts.source+" ' width ='200' height='200' alt='logo' id='newImage'>"
                + "<div class='productText'>"
                + "<h2>" + shirts.type
                + "<br>"
                + "</h2>"
                + "<br>" + "<p class='description'>" + shirts.description +
                "<br>"
                + "<a href=item.html onclick='itemFunction("+i+","+1+")'>Read more</a>"
                + "</p>"
                + "<p><b>" + shirts.price + "</b> </p>"
                + "<div class='buyButton'>"
                + "<button onclick='buyFunction()'>Buy</button>"
                + "</div>"
                + "</div>";
        }
        else {
            document.getElementById("clothes").innerHTML +=
                "<div class='image'>"
                + "<img src=' "+shirts.source+" ' width ='200' height='200' alt='logo' id='newImage'>"
                + "<div class='productText'>"
                + "<h2>" + shirts.type
                + "<br>"
                + "</h2>"
                + "<br>" + "<p class='description'>" + shirts.description +
                "<br>"
                + "<a href=item.html onclick='itemFunction("+i+","+1+")'>Read more</a>"
                + "</p>"
                + "<p><b>" + shirts.price + "</b> </p>"
                + "<div class='buyButton'>"
                + "<button onclick='buyFunction()'>Buy</button>"
                + "</div>"
                + "</div>";
        }
        i++;

    });


/*Adding all hoodies*/
/*j used as index for read more function*/
var j=0;
hoodies.forEach(
    hoodie => {
        /* First t-shirt added separately with id for jump menu*/
        if(hoodie.type==="UCLan Hoodie (1) - Purple"){
            document.getElementById("clothes").innerHTML +=
                "<div class='image' id='hoodies'>"
                + "<img src=' "+hoodie.source+" ' width ='200' height='200' alt='logo' id='newImage'>"
                + "<div class='productText'>"
                + "<h2>" + hoodie.type
                + "<br>"
                + "</h2>"
                + "<br>" + "<p class='description'>" + hoodie.description +
                "<br>"
                + "<a href=item.html onclick='itemFunction("+j+","+2+")'>Read more</a>"
                + "</p>"
                + "<p><b>" + hoodie.price + "</b> </p>"
                + "<div class='buyButton'>"
                + "<button onclick='buyFunction()'>Buy</button>"
                + "</div>"
                + "</div>";
        }
        else {
            document.getElementById("clothes").innerHTML +=
                "<div class='image'>"
                + "<img src=' "+hoodie.source+" ' width ='200' height='200' alt='logo' id='newImage'>"
                + "<div class='productText'>"
                + "<h2>" + hoodie.type
                + "<br>"
                + "</h2>"
                + "<br>" + "<p class='description'>" + hoodie.description +
                "<br>"
                + "<a href=item.html onclick='itemFunction("+j+","+2+")'>Read more</a>"
                + "</p>"
                + "<p><b>" + hoodie.price + "</b> </p>"
                + "<div class='buyButton'>"
                + "<button onclick='buyFunction()'>Buy</button>"
                + "</div>"
                + "</div>";
        }
        j++;

    });

/*Adding all jumpers*/
/*k used as index for read more function*/
var k=0;
jumpers.forEach(
    jumper => {
        /* First t-shirt added separately with id for jump menu*/
        if(jumper.type==="UCLan Logo Jumper (1) - Purple"){
            document.getElementById("clothes").innerHTML +=
                "<div class='image' id='jumpers'>"
                + "<img src=' "+jumper.source+" ' width ='200' height='200' alt='logo' id='newImage'>"
                + "<div class='productText'>"
                + "<h2>" + jumper.type
                + "<br>"
                + "</h2>"
                + "<br>" + "<p class='description'>" + jumper.description +
                "<br>"
                + "<a href=item.html onclick='itemFunction("+k+","+3+")'>Read more</a>"
                + "</p>"
                + "<p><b>" + jumper.price + "</b> </p>"
                + "<div class='buyButton'>"
                + "<button onclick='buyFunction()'>Buy</button>"
                + "</div>"
                + "</div>";
        }
        else {
            document.getElementById("clothes").innerHTML +=
                "<div class='image'>"
                + "<img src=' "+jumper.source+" ' width ='200' height='200' alt='logo' id='newImage'>"
                + "<div class='productText'>"
                + "<h2>" + jumper.type
                + "<br>"
                + "</h2>"
                + "<br>" + "<p class='description'>" + jumper.description +
                "<br>"
                + "<a href=item.html onclick='itemFunction("+k+","+3+")'>Read more</a>"
                + "</p>"
                + "<p><b>" + jumper.price + "</b> </p>"
                + "<div class='buyButton'>"
                + "<button onclick='buyFunction()'>Buy</button>"
                + "</div>"
                + "</div>";
        }
        k++;

    });


/*Save to session storage function*/
function itemFunction(num,type){
    if(type===1) {
        sessionStorage.setItem('item', JSON.stringify(tShirts[num]));
    }
    else if(type===2){
        sessionStorage.setItem('item', JSON.stringify(hoodies[num]));
    }
    else if(type===3){
        sessionStorage.setItem('item', JSON.stringify(jumpers[num]));
    }
}

function buyFunction(){
    alert('Item added to cart!')

}

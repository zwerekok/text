function comenu() {
    var menu = document.getElementById("menu");
    var mdiv = document.querySelector('.mdiv');
    menu.classList.toggle("hidden");
    menu.classList.toggle("menu-visible");
}
var t1 = document.getElementById("tovar1");
if (t1) {
    t1.addEventListener("click", function() {
        window.location.href = "buy.html?index=0";
    });
} 
var t2 = document.getElementById("tovar2");
if (t2) {
    t2.addEventListener("click", function() {
        window.location.href = "buy.html?index=1";
    });
} 
var t3 = document.getElementById("product-info1");
if (t3) {
    t3.addEventListener("click", function() {
        window.location.href = "buy.html?index=2";
    });
} 
var t4 = document.getElementById("tovar4");
if (t4) {
    t4.addEventListener("click", function() {
        window.location.href = "buy.html?index=3";
    });
} 
var t5 = document.getElementById("tovar5");
if (t5) {
    t5.addEventListener("click", function() {
        window.location.href = "buy.html?index=4";
    });
} 
var t6 = document.getElementById("tovar6");
if (t6) {
    t6.addEventListener("click", function() {
        window.location.href = "buy.html?index=5";
    });
} 




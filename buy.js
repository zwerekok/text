function comenu() {
    var menu = document.getElementById("menu");
    var mdiv = document.querySelector('.mdiv');
    menu.classList.toggle("hidden");
    menu.classList.toggle("menu-visible");
}
var karts = ['len.jpg', 'hlop.jpeg', 'shek.jpg','mic.jpg','pod.jpg','salf.jpg'];
var names = ['Льняная ткань "Натюрель" ', 'Хлопковый велюр "Легкость"', 'Шелковая тафта "Роскошь"','Микрофибра "Дышащая свежесть"','Шелковая подушка "Нежный сон"','Льняная кухонная салфетка "Экостиль"'];
var opiss = ['Экологически чистая льняная ткань, идеальная для создания стильного и комфортного текстиля. Прекрасно подходит для пошива одежды и домашних текстильных изделий.', 
'Мягкий и уютный велюр из высококачественного хлопка. Отлично подходит для пошива пледов, подушек и других предметов декора.', 
'Элегантная шелковая тафта с шелковистой поверхностью. Прекрасно подчеркивает роскошь и изысканность вашего интерьера.',
'Инновационная микрофибра с высокой воздухопроницаемостью. Подходит для создания текстильных изделий, обеспечивающих комфорт и свежесть в любое время года.',
'Создайте уют в своей спальне с этой шелковой подушкой высокого качества. Нежные и гладкие волокна шелка обеспечат комфортный сон и поддержат здоровье вашей кожи.',
'Придайте своей кухне стильный вид с нашей льняной салфеткой. Экологически чистый материал льна делает ее не только элегантным аксессуаром, но и удобным помощником в повседневных кулинарных делах.'];
const params = new URLSearchParams(window.location.search);
const mindex = params.get("index");
var opis= document.getElementById('opis');  
var nam=document.getElementById("name");
var im=document.getElementsByClassName("mimg")[0];
im.src=karts[mindex];
nam.textContent=names[mindex];
opis.textContent = opiss[mindex];
var dtn=document.getElementById('btn');
btn.addEventListener("click", function() {
    alert("Данные записаны");
});


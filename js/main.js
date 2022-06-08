var num = +prompt("Sayohatga mo'ljallangan pul miqdorini o'zbek so'mi valyutasida kiriting");
var elText = document.querySelector('.text')  
if (num >= 9666000) {
  elText.textContent = "Oq yo’l, Alisher!"
} else {
  elText.textContent = "Alisher, ozgina sabr qilish kerak bo’lar ekan."
}
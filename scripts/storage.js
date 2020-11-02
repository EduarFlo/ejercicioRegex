var nombre = localStorage['username'];
var controlN = localStorage['control'];
var codigo = localStorage['postal'];
var fecha = localStorage['date'];

var p1 = document.getElementById('nombre');
var p2 = document.getElementById('control');
var p3 = document.getElementById('code1');
var p4 = document.getElementById('date1');


p1.innerHTML= nombre;
p2.innerHTML= controlN;
p3.innerHTML= codigo;
p4.innerHTML= fecha;

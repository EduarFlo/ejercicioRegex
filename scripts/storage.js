var nombre = localStorage['username'];
var controlN = localStorage['noControl'];
var codigo = localStorage['postalCode'];
var fecha = localStorage['date'];

var p1 = document.getElementById('nombre').value;
var p2 = document.getElementById('control').value
var p3 = document.getElementById('code1').value;
var p4 = document.getElementById('date1').value;


p1.innerHTML= nombre;
p2.innerHTML= controlN;
p3.innerHTML= codigo;
p4.innerHTML= fecha;

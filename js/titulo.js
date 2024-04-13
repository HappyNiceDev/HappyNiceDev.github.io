// JavaScript Document

var txt="Bienvenidos a mi web http://descubramasde.sytes.net - ";
var espera=100;
var refresco=null;
function rotulo_title() {
document.title=txt;
txt=txt.substring(1,txt.length)+txt.charAt(0);
refresco=setTimeout("rotulo_title()",espera);}
rotulo_title();
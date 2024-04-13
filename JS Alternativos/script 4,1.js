// JavaScript Document

var largura=355
var altura=600
var bgcolor=''
var fundo=''

var mensagens=new Array()
mensagens[0]="<center><font color='#99CC32' face='Arial'><br><h3>Es el m&#225;s caro y el m&#225;s r&#225;pido en aceleraci&#243;n del mundo, logrando de 0 a 100kms en solo 2.6 segundos <p><img src='1.jpeg' width='75%'><p><a href='http://www.fullcoches.com/foro/noticias-articulos-interesantes/7186-los-10-autos-mas-caros-del-mundo-d-2009-2010-a.html'>Vea el top 10 de los autos mas caros del mundo</a></h3></font></center>"
mensagens[1]="<center><font color='#33CC66' face='Arial'><font size='5'><img src='ingles.jpg' width='75%'><h4>Estudia ingles en un ambiente calido Y ameno!</h4><br><h3>Cursos de Ingles para TODOS LOS NIVELES.</h3><br><h4>Certificados otrogados por la Cultural Inglesa de Buenos Aires. Examenes Internacionales KET PET FIRST CERTIFICATE.<br>ADEMAS: Apoyo Escolar Primario y Secundario</h4></p><p><h2>Comunicate al 4245-4091.</h2></font></center>"
mensagens[2]="<center><font color='#33CC66' face='Arial'><font size='5'><img src='ingles.jpg' width='75%'><h4>Estudia ingles en un ambiente calido Y ameno!</h4><br><h3>Cursos de Ingles para TODOS LOS NIVELES.</h3><br><h4>Certificados otrogados por la Cultural Inglesa de Buenos Aires. Examenes Internacionales KET PET FIRST CERTIFICATE.<br>ADEMAS: Apoyo Escolar Primario y Secundario</h4></p><p><h2>Comunicate al 4245-4091.</h2></font></center>"
mensagens[3]="<center><font color='#33CC66' face='Arial'><font size='5'><img src='ingles.jpg' width='75%'><h4>Estudia ingles en un ambiente calido Y ameno!</h4><br><h3>Cursos de Ingles para TODOS LOS NIVELES.</h3><br><h4>Certificados otrogados por la Cultural Inglesa de Buenos Aires. Examenes Internacionales KET PET FIRST CERTIFICATE.<br>ADEMAS: Apoyo Escolar Primario y Secundario</h4></p><p><h2>Comunicate al 4245-4091.</h2></font></center>"
mensagens[4]="<center><font color='#33CC66' face='Arial'><font size='5'><img src='ingles.jpg' width='75%'><h4>Estudia ingles en un ambiente calido Y ameno!</h4><br><h3>Cursos de Ingles para TODOS LOS NIVELES.</h3><br><h4>Certificados otrogados por la Cultural Inglesa de Buenos Aires. Examenes Internacionales KET PET FIRST CERTIFICATE.<br>ADEMAS: Apoyo Escolar Primario y Secundario</h4></p><p><h2>Comunicate al 4245-4091.</h2></font></center>"

if (mensagens.length>1)
i=2
else
i=0

function mover1(whichlayer){
tlayer=eval(whichlayer)
if (tlayer.top>0&&tlayer.top<=5){
tlayer.top=0
setTimeout("mover1(tlayer)",8000)
setTimeout("mover2(document.principal.document.segundo)",8000)
return
}
if (tlayer.top>=tlayer.document.height*-1){
tlayer.top-=5
setTimeout("mover1(tlayer)",10)
}
else{
tlayer.top=altura
tlayer.document.write(mensagens[i])
tlayer.document.close()
if (i==mensagens.length-1)
i=0
else
i++
}
}

function mover2(whichlayer){
tlayer2=eval(whichlayer)
if (tlayer2.top>0&&tlayer2.top<=5){
tlayer2.top=0
setTimeout("mover2(tlayer2)",8000)
setTimeout("mover1(document.principal.document.primeiro)",8000)
return
}
if (tlayer2.top>=tlayer2.document.height*-1){
tlayer2.top-=5
setTimeout("mover2(tlayer2)",100)
}
else{
tlayer2.top=altura
tlayer2.document.write(mensagens[i])
tlayer2.document.close()
if (i==mensagens.length-1)
i=0
else
i++
}
}

function mover3(whichdiv){
tdiv=eval(whichdiv)
if (tdiv.style.pixelTop>0&&tdiv.style.pixelTop<=5){
tdiv.style.pixelTop=0
setTimeout("mover3(tdiv)",8000)
setTimeout("mover4(segundo2)",8000)
return
}
if (tdiv.style.pixelTop>=tdiv.offsetHeight*-1){
tdiv.style.pixelTop-=5
setTimeout("mover3(tdiv)",100)
}
else{
tdiv.style.pixelTop=altura
tdiv.innerHTML=mensagens[i]
if (i==mensagens.length-1)
i=0
else
i++
}
}

function mover4(whichdiv){
tdiv2=eval(whichdiv)
if (tdiv2.style.pixelTop>0&&tdiv2.style.pixelTop<=5){
tdiv2.style.pixelTop=0
setTimeout("mover4(tdiv2)",8000)
setTimeout("mover3(primeiro2)",8000)
return
}
if (tdiv2.style.pixelTop>=tdiv2.offsetHeight*-1){
tdiv2.style.pixelTop-=5
setTimeout("mover4(segundo2)",100)
}
else{
tdiv2.style.pixelTop=altura
tdiv2.innerHTML=mensagens[i]
if (i==mensagens.length-1)
i=0
else
i++
}
}

function iniciar(){
if (document.all){
mover3(primeiro2)
segundo2.style.top=altura
segundo2.style.visibility='visible'
}
else if (document.layers){
document.principal.visibility='show'
mover1(document.principal.document.primeiro)
document.principal.document.segundo.top=altura+5
document.principal.document.segundo.visibility='show'
}
}
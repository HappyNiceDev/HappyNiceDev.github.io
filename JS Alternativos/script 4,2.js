// JavaScript Document

if (document.all){
document.writeln('<span id="principal2" style="position:relative;width:'+largura+';height:'+altura+';overflow:hiden;background-color:'+bgcolor+' ;background-image:url('+fundo+')">')
document.writeln('<div style="position:absolute;width:'+largura+';height:'+altura+';clip:rect(0 '+largura+' '+altura+' 0);left:0;top:0">')
document.writeln('<div id="primeiro2" style="position:absolute;width:'+largura+';left:0;top:1;">')
document.write(mensagens[0])
document.writeln('</div>')
document.writeln('<div id="segundo2" style="position:absolute;width:'+largura+';left:0;top:0;visibility:hidden">')
document.write(mensagens[1])
document.writeln('</div>')
document.writeln('</div>')
document.writeln('</span>')
}
iniciar()

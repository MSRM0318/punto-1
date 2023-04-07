var tit = document.title;
var c = 0;
function writetitle()
{
    document.title = tit.substring(0,c);
    if(c==tit.length)
{

    c = 0;
    setTimeout("writetitle()", 1000)
}

else
{
    c++;
    setTimeout("writetitle()", 200)
}
}

writetitle()

setInterval(()=>{
const tiempo = document.querySelector("#tiempo");
let date = new Date();
let hora = date.getHours();
let minutos = date.getMinutes();
let segundos = date.getSeconds();
let dia_noche = "AM";
if(hora >12){
    dia_noche = "PM"
    hora = hora -12;
}
if(segundos <10){
    segundos = "0" + segundos;
}
if(minutos <10){
    minutos = "0" + minutos;
}
if(hora <10){
    hora = "0" + hora;
}
tiempo.textContent = hora + ":" +minutos + ":" +segundos + ":" +dia_noche;
});



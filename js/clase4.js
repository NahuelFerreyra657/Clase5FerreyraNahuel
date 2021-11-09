let precio=0;
let precio2=0;
let precio3=0; d
let operacion= "si";
let precioFinal = 0; 
function sumarmangas(a,b,c){ 
     precioFinal=a+b+c;
    return precioFinal 
}
while (operacion == "si"){
    let manga=prompt("Qué manga llevás?");
if ((manga == "One punch man") || (manga == "Naruto") || (manga == "Drstone") || (manga == "Claymore") || (manga == "Fire force")){
   precio=575.00;
   console.log(`El precio de ${manga} es ${precio}` );
} else if( manga == "Negima"){
    precio2=890.00;
    console.log(`El precio de ${manga} es ${precio2}` );
} else if(manga == "Attack on titan"){
    precio3=700.00
    console.log(`El precio de ${manga} es ${precio3}` ); 
} else{
    console.log ("No tenemos ese manga");
}
operacion= prompt("Querés comprar otro manga? (si/no)")
}
sumarmangas(precio,precio2,precio3) 
console.log(`El precio total es ${precioFinal}`)




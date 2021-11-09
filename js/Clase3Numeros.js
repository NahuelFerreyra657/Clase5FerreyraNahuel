

let numero;
let operacion= "si";


while (operacion == "si"){
    let numero = Number(prompt("Que tabla querés saber? "));
    for (let i = 1; i <= 10; i++) {
        
        console.log(`${numero}x${i} = ${numero * i}`);
    }
    operacion= prompt("Querés saber otra tabla? (si/no)")
}















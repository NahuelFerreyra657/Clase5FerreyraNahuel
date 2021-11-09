







class Productos {
    constructor(nombre,categoria,stock, precio,  cantidadComprada){
        this.nombre = nombre;
        this.categoria = categoria;
        this.stock = stock;
        this.precio = precio;
        this.cantidad = cantidadComprada;
    }

    eleccionManga(){
      if((this.nombre=="Naruto")||(this.nombre=="One punch man")||(this.nombre=="Drstone" )){
      alert(`Buena elección, llevas ${this.nombre},precio es ${this.precio}`) 
      } else {
          alert(`Lo sentimos, no tenemos ese manga`)
      } 
    }
   

    controlStock(){

        if (this.cantidad > this.stock) {

             alert("No tenemos suficiente stock de este producto.")
            
        }
        else if (this.cantidad < this.stock && this.cantidad > 0){

            this.stock = this.stock - this.cantidad
            alert("La cantidad ingresada es: "+  this.cantidad +  " y tenes que pagar: " + this.cantidad*this.precio);
            console.log()
        }
        else {
            alert("Usted ingreso una cantidad negativa, eso es incorrecto.")
        }}
    
    }
    

let eleccionUsuario = prompt("Qué manga quéres llevar?")
let compraUsuario = Number(prompt("Ingrese la cantidad a comprar"));

const objeto1 = new Productos ("Naruto", "Shonen", 5, 575, compraUsuario);
objeto1.controlStock()

eleccionUsuario= prompt("Llevas otro manga?")
eleccionUsuario = prompt("Qué manga quéres llevar?")
compraUsuario = Number(prompt("Ingrese la cantidad a comprar"));
const objeto2 = new Productos ("One punch man", "Shonen", 20, 575,compraUsuario);
objeto2.controlStock()

eleccionUsuario = prompt("Qué manga quéres llevar?")
compraUsuario = Number(prompt("Ingrese la cantidad a comprar"));
const objeto3 = new Productos ("Drstone", "Shonen", 20, 575, compraUsuario);
objeto3.controlStock()


class Producto {
    constructor(nombre,categoria,stock, precio,  cantidadComprada){
        this.nombre = nombre;
        this.categoria = categoria;
        this.stock = stock;
        this.precio = precio;
        this.cantidad = cantidadComprada;
    }
    
        

    controlStock(){

        if (this.cantidad > this.stock) {

             alert("No tenemos suficiente stock de este producto.")
            
        }
        else if (this.cantidad < this.stock && this.cantidad > 0){

            this.stock = this.stock - this.cantidad
            alert("La cantidad ingresada es: "+  this.cantidad +  " y tenes que pagar: " + this.cantidad*this.precio + "el stock actualizado es de:" +this.stock);
            console.log()
        }
        else {
            alert("Usted ingreso una cantidad negativa, eso es incorrecto.")
        }
    }
}


let compraUsuario = Number(prompt("Ingrese la cantidad a comprar"));
 
const objeto1 = new Producto ("Naruto", "Shonen", 50, 575, compraUsuario);
objeto1.controlStock()

 compraUsuario = Number(prompt("Ingrese la cantidad a comprar"));
const objeto2 = new Producto ("Naruto actualizado", "Shonen", objeto1.stock, 575);
objeto2.controlStock()


 





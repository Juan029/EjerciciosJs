
alert("Factura de Compra de productos con JavaScript");
let factura = "Factura de venta NRO.001";
let espaciado = "----------------------------------------";
let subtotal = "El subtotal de la factura es ";
let productos = "Los productos que escogiste son";



let Nombre = prompt("Nombre del cliente");
let prod1 = prompt("Ingrese el producto que deseas comprar");
let precio1 = prompt ("Precio Unitario");


let prod2 = prompt("Ingrese el producto que deseas comprar");
let precio2 = prompt("Precio Unitario");

let prod3 = prompt("Ingrese el producto que deseas comprar");
let precio3 = prompt("Precio Unitario");



let prod4 = prompt("Ingrese el producto que deseas comprar");
let precio4 = prompt("Precio Unitario");



console.log(factura);
console.log("Bienvenido a la tienda " + Nombre);
console.log(productos)


console.log(prod1 , "y su precio es ", Number.parseInt (precio1));

console.log(prod2 , "y su precio es ", Number.parseInt (precio2));

console.log(prod3 , "y su precio es ", Number.parseInt (precio3));

console.log(prod4 , "y su precio es ", Number.parseInt (precio4));



let subtotalcito = ( Number.parseInt (precio1) + Number.parseInt (precio2) + Number.parseInt (precio3) + Number.parseInt (precio4));

let ivitaa = ((Number.parseInt (precio1) + Number.parseInt (precio2) + Number.parseInt (precio3) + Number.parseInt (precio4)) * 0.19);

let descuentico = ((Number.parseInt (precio1) + Number.parseInt (precio2) + Number.parseInt (precio3) + Number.parseInt (precio4)) * 0.10);





console.log(espaciado);

console.log( "El subtotal de su compra es de " , subtotalcito  , "Pesos colombianos" );

console.log("El iva de tu factura es de " , ivitaa , "Pesos colombianos")

console.log("El descuento de tu factura es de ",  descuentico , "Pesos colombianos"   )

console.log("El total que debe pagar el señor ", Nombre, " es de " , subtotalcito + ivitaa - descuentico  )

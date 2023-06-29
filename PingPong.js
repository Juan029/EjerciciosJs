// let num = (prompt("Digita un numero"));

// if (num%num !== 0 ){
//     console.log("Ingresaste un dato incorrecto, vuelve a intentarlo");
// }

// else{

//     let r;
// for (r = 0; r <= num; r ++){
//     console.log(r)
//     if(r%5 === 0 && r%3 === 0) {
//         console.log(`Este ${r} es Ping Pong`);
//         continue;
//     }

//  else if (r%5 === 0){
//     console.log(`Este numero ${r} Pong`);
// }

// else if (r%3 === 0){
//     console.log(`Este numero ${r} es Ping`);
// }
// }
// }




//Ejercicio pero con el While
let num;

do{
    num = prompt("Digita un número entero");

}
while (num%2 != 0 );


let i;

for (i = 1; i <= num; i ++){
    console.log(i)
    if(i%5 === 0 && i%3 === 0) {
        console.log(`Este número ${i} es PING PONG`);
        continue;
    }

 else if (i%5 === 0){
    console.log(`Este número ${i} PONG`);
}

else if (i%3 === 0){
    console.log(`Este número ${i} es PING`);
}
}





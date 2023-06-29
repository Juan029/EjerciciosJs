alert("Bienvenido al sitio de apuestas");

let saldo = 5000;

while (saldo > 0 && saldo < 10000){
let numero = parseInt(prompt("Digita un número del 1 al 10"));
let apuesta = prompt("Digita la cantidad de dinero que quieres apostar");
let aleatorio = Math.floor(Math.random()*10) + 1;

//bajar el *10 a un numero más bajo para comprobar que si funciona, por ejemplo let aleatorio = Math.floor(Math.random()*3) + 1;

if (apuesta > 5000){
    alert("No puedes apostar más de 5000");
}

if (saldo == 10000){
    alert("Alcanzaste el saldo máximo permitido");
}


if (numero === aleatorio){
    totalg = saldo += apuesta * 3;
    console.log(`Ganaste con el número ${numero}`);
    console.log(`Tu saldo después de ganar la apuesta es de ${totalg}`);
}

else{
    console.log(aleatorio);
    totalp = saldo -= apuesta;
    console.log(`Perdiste con el número ${numero}`);
    console.log(`Tu saldo después de perder la apuesta es de ${saldo}`);
}

}
if (saldo <= 0) {
    console.log("Has perdido todo el saldo que tenías");
  } else if (saldo >= 10000) {
    console.log("Has alcanzado el máximo de saldo. ¡Felicidades! Acabas de ganar");
  }



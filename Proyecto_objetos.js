const nombres = [];
const tutor1 = {
    Tutor: prompt ("Ingresa el nombre de tutor"),
    Menor: prompt("Ingresa el nombre del menor")
};

const tutor2 = {
    Tutor: prompt ("Ingresa el nombre de tutor"),
    Menor: prompt("Ingresa el nombre del menor")
};

const tutor3 = {
    Tutor: prompt ("Ingresa el nombre de tutor"),
    Menor: prompt("Ingresa el nombre del menor")
};


nombres.unshift(tutor3);
nombres.push(tutor2);
nombres.push(tutor1);

console.log(nombres);
console.table(nombres);

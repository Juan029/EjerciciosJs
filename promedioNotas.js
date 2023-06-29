alert("Bienvenidos aprendices a continuación ingresarán su nombre y sus tres notas");
let nom1 = prompt ("Nombre del aprendiz");
let not1 = Number.parseFloat(prompt ("Primer nota "));
let not2 = Number.parseFloat(prompt ("Segunda nota"));
let not3 = Number.parseFloat(prompt ("Tercer nota"));

let nom2 = prompt ("Nombre del segundo aprendiz");
let notica1 = Number.parseFloat(prompt ("Primer nota "));
let notica2 = Number.parseFloat(prompt ("Segunda nota"));
let notica3 = Number.parseFloat(prompt ("Tercer nota"));

let nom3 = prompt ("Nombre del tercer aprendiz");
let lanota1 = Number.parseFloat(prompt ("Primer nota "));
let lanota2 = Number.parseFloat(prompt ("Segunda nota"));
let lanota3 = Number.parseFloat(prompt ("Tercer nota"));


console.log("Recuerde que la primer y segunda nota valen un 20%, y la tercer nota un 60%");
console.log("El aprendiz ", nom1, " tuvo las siguientes notas");
console.log("Primer nota: " , not1);
console.log("Segunda nota: " , not2);
console.log("Tercer nota: " , not3);
console.log("La nota final que obtuvo el estudiante", nom1,       " fue: "  ,    (not1*0.20)+(not2*0.20)+(not3*0.60));
console.log("---------------------------------");



console.log("Segundo aprendiz");
console.log("El aprendiz ", nom2, " tuvo las siguientes notas");
console.log("Primer nota: " , notica1);
console.log("Segunda nota: " , notica2);
console.log("Tercer nota: " , notica3);
console.log("La nota final que obtuvo el estudiante " , nom2 ," fue: "  ,    (notica1*0.20)+(notica2*0.20)+(notica3*0.60));
console.log("---------------------------------");



console.log("Tercer aprendiz");
console.log("El aprendiz ", nom3, " tuvo las siguientes notas");
console.log("Primer nota: " , lanota1);
console.log("Segunda nota: " , lanota2);
console.log("Tercer nota: " , lanota3);
console.log("La nota final que obtuvo el estudiante", nom3,       " fue: "  ,    (lanota1*0.20)+(lanota2*0.20)+(lanota3*0.60));
console.log("---------------------------------");


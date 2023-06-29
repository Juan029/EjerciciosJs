//
let num = (prompt("Digita el numero del mes que deseas ver, del 1 al 12"));
let ene="Enero";
let feb="Febrero";
let mar="Marzo";
let abr="Abril";
let may="Mayo";
let jun="Junio";
let jul="Julio";
let ago="Agosto";
let sep="Septiembre";
let oct="Octubre";
let nov="Noviembre";
let dic="Diciembre";

if(num > 12 || num==0 ){
    console.log("Intenta de nuevo, el mes que digitaste no existe")


}









// INVIERNO

else if (num==1){
    console.log(`El numero que escribiste es ${num} y corresponde a enero el cual tiene 31 dias y está en invierno`)
    console.table("En invierno están los meses de " ,ene,feb,mar)

}


    else if  (num==2){
        console.log(`El numero que escribiste es ${num} y corresponde a febrero el cual tiene 28 dias y está en invierno`)
        console.table("En invierno están los meses de " ,ene,feb,mar)

    }


        else if (num==3){
            console.log(`El numero que escribiste es ${num} y corresponde a marzo el cual tiene 31 dias y está en invierno`)
            console.table("En invierno están los meses de " ,ene,feb,mar)

        }





// PRIMAVERA

else if (num==4){
    console.log(`El numero que escribiste es ${num} y corresponde a abril el cual tiene 30 dias y está en primavera`)
    console.table("En primavera están los meses de " ,abr,may)

}

    else if (num==5){
        console.log(`El numero que escribiste es ${num} y corresponde a mayo el cual tiene 31 dias y está en primavera`)
        console.table("En primavera están los meses de " ,abr,may)

    }




// VERANO

    else if (num==6){
        console.log(`El numero que escribiste es ${num} y corresponde a junio el cual tiene 31 dias y está en verano`)
        console.table("En verano están los meses de " ,jun,jul,ago)

    }


        else if (num==7){
            console.log(`El numero que escribiste es ${num} y corresponde a julio el cual tiene 30 dias y está en verano`)
            console.table("En verano están los meses de " ,jun,jul,ago)
        }


        else if (num==8){
            console.log(`El numero que escribiste es ${num} y corresponde a agosto el cual tiene 31 dias y está en verano`)
            console.table("En verano están los meses de " ,jun,jul,ago)

        }





// OTOÑO

else if (num==9){
    console.log(`El numero que escribiste es ${num} y corresponde a septiembre el cual tiene 30 dias y está en otoño`)
    console.table("En otoño están los meses de " ,sep,oct,nov,dic)

}


    else if (num==10){
        console.log(`El numero que escribiste es ${num} y corresponde a octubre el cual tiene 31 dias y está en otoño`)
        console.table("En otoño están los meses de " ,sep,oct,nov,dic)

    }


    else if (num==11){
        console.log(`El numero que escribiste es ${num} y corresponde a noviembre el cual tiene 30 dias y está en otoño`)
        console.table("En otoño están los meses de " ,sep,oct,nov,dic)

    }

    else if (num==12){
        console.log(`El numero que escribiste es ${num} y corresponde a diciembre el cual tiene 31 dias y está en otoño`)
        console.table("En otoño están los meses de " ,sep,oct,nov,dic)
        console.log(`Con diciembre te encuentras en época de navidad en`)
    }



    else if (num != Number){
        console.log(`Tienes que ingresar un numero, lo que ingresaste ahorita es una letra`)
    }
// 38:50

var number = process.argv[2];
var lenguajeNatural = ""


if(number!= undefined){

    if(number>999999999)
        lenguajeNatural = "No se contar tanto";
    //UN CASO ESPECIAL ES EL NUMERO 0
    else if(number==0){
        lenguajeNatural = "cero";
    }else {
        lenguajeNatural = getTripleta(number % 1000);
        number = quitarCifra(number, 3);

        //A PARTIR DE AQUI VIENEN LOS MILES
        if(number>0){
            //LOS MILES SON UN CASO ESPECIAL POR NO VENIR PRECEDIDO DEL UNO
            if(number%1000==1)
                lenguajeNatural = "mil "+ lenguajeNatural;
            else if(number%1000>1)
                lenguajeNatural = getTripleta(number%1000)+" mil "+ lenguajeNatural;
            number = quitarCifra(number,3);
        }
        //A PARTIR DE AQUI VIENEN LOS MILLONES
        if(number>0){
            //LOS MILLONES SON UN CASO ESPECIAL AL VENIR PRECEDIDO DE UN Y NO UNO
            if(number%1000==1)
                lenguajeNatural = "un millon "+ lenguajeNatural;
            else if(number%1000>1)
                lenguajeNatural = getTripleta(number%1000)+" millones "+ lenguajeNatural;
            number = quitarCifra(number,3);
        }
    }

    console.log(lenguajeNatural);
}

function getTripleta(numero){
    var tripleta = "";

    //EL CASO 100 ES ESPECIAL
    if(numero==100){
        return "cien ";
    }

    //MIRAMOS SI LOS 2 ÚLTIMOS NÚMEROS SON MENORES O IGUAL QUE 20 YA QUE NO EXISTE PATRON PARA
    //LOS 20 PRIMEROS NÚMEROS
    if (numero % 100 <= 20) {
        tripleta = sinPatron(numero % 100);
        numero = quitarCifra(numero, 2);
    } else {
        tripleta = primeros(numero % 10);
        numero = quitarCifra(numero, 1);
        tripleta = decimos(numero % 10) + ((tripleta.length > 0) ? " y " : "") + tripleta;
        numero = quitarCifra(numero, 1);
    }

    //A CONTINUACION CONSTRUIMOS LOS CIENTOS
    tripleta = cientos(numero % 10) + ((tripleta!=null)?tripleta:"");
    numero = quitarCifra(numero, 1);

    return tripleta;
}

function sinPatron(numero){
    switch(numero){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return primeros(numero);
        case 10:
            return "diez";
        case 11:
            return "once";
        case 12:
            return "doce";
        case 13:
            return "trece";
        case 14:
            return "catorce";
        case 15:
            return "quince";
        case 16:
            return "dieciseis";
        case 17:
            return "diecisiete";
        case 18:
            return "dieciocho";
        case 19:
            return "diecinueve";
        case 20:
            return "veinte";
    }
}

function primeros(numero){
    switch (numero){
        case 1:
            return "uno";
        case 2:
            return "dos";
        case 3:
            return "tres";
        case 4:
            return "cuatro";
        case 5:
            return "cinco";
        case 6:
            return "seis";
        case 7:
            return "siete";
        case 8:
            return "ocho";
        case 9:
            return "nueve";
        case 0:
            return "";
    }
}

function decimos(numero){
    switch (numero){
        case 2:
            return "veinti";
        case 3:
            return "treinta";
        case 4:
            return "cuarenta";
        case 5:
            return "cincuenta";
        case 6:
            return "sesenta";
        case 7:
            return "setenta";
        case 8:
            return "ochenta";
        case 9:
            return "noventa";
        case 0:
            return "";
    }
}

function cientos(numero){
    switch(numero) {
        case 1:
            return "ciento ";
        case 2:
            return "doscientos ";
        case 3:
            return "trescientos ";
        case 4:
            return "cuatrocientos ";
        case 5:
            return "quinientos ";
        case 6:
            return "seiscientos ";
        case 7:
            return "setecientos ";
        case 8:
            return "ochocientos ";
        case 9:
            return "novecientos ";
        case 0:
            return "";
    }
}

function miles(numero){
    if(numero==0)
        return "";
    else if(numero==1)
        return "mil ";
    else
        return primeros(numero)+" mil "
}

function quitarCifra(numero, cantidad){
    var length = numero.toString().length;
    return Number(numero.toString().substr(0,length-cantidad));
}



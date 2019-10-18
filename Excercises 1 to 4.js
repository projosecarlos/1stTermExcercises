document.open();

function mayor(numero1, numero2, numero3, numero4){
    if(numero1 > numero2 && numero1 > numero3 && numero1 > numero4){
        return numero1;

    }else if(numero2 > numero1 && numero2 > numero3 && numero2 > numero4){
        return numero2;

    }else if(numero3 > numero1 && numero3 > numero2 && numero3 > numero4){
        return numero3;

    }else{
        return numero4;
    }
}

function lanzamientoDado(){
    tirada = Math.round((Math.random()+1)*6);
    return tirada;
}

function lanzamiento6000(){
    let veces1=0, veces2=0, veces3=0, veces4=0, veces5=0, veces6=0;
    for(let i=0; i<=6000; i++){
        tirada = Math.round((Math.random()*5)+1);
        switch (tirada) {
            case 1:
                veces1++;
                break;
            case 2:
                veces2++; 
                break;
            case 3:
                veces3++;
                break;
            case 4:
                veces4++;
                break;
            case 5:
                veces5++;
                break;
            case 6:
                veces6++;
                break;
          }
    }
    return document.write('El numero de veces que ha salido 1 es: '+veces1+'<br>'+
    'El numero de veces que ha salido 2 es: '+veces2+'<br>'+
    'El numero de veces que ha salido 3 es: '+veces3+'<br>'+
    'El numero de veces que ha salido 4 es: '+veces4+'<br>'+
    'El numero de veces que ha salido 5 es: '+veces5+'<br>'+
    'El numero de veces que ha salido 6 es: '+veces6);
}

function volumenEsfera(radio){
    volumen = (4*Math.PI()*Math.pow(radio, 3));
    return volumen;
}

lanzamiento6000();
//Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1
//al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén
//juntos los elementos pares y los impares. Después, volver a mostrar el array

function paresImpares(){
    array = [1000];
    for(let i=0; i<=array.length(); i++){
        numero = Math.round(Math.random()+1*1000);
        document.write(numero);
        i++;
    }
}

paresImpares();
document.open();

function potenciaRecursiva(base, exponente){
    if(exponente == 0)
    return 1;
    else
    return base * potenciaRecursiva(base, exponente -1);
}

document.write(potenciaRecursiva(5,5))


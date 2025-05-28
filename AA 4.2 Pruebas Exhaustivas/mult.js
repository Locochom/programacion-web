function multiplicacionDos(a, b) {
    return a * b;
}

function multiplicacion(a, b) {

    if (
        typeof a !== 'number' || typeof b !== 'number' ||
        !Number.isFinite(a) || !Number.isFinite(b) ||
        !Number.isSafeInteger(a) || !Number.isSafeInteger(b)
    ) {
        return NaN;
    }
    return a * b;
}




module.exports = multiplicacion;

console.group("Pruebas maanuales");

    console.log("Caso normal", multiplicacion(2,3));
    console.log("Caso con decimales", multiplicacion(1.5, 4.5));
    console.log("Caso frontera minimo", multiplicacion(0, 5));
    console.log("Caso frontera maximo", multiplicacion(Number.MAX_SAFE_INTEGER, 2));
    console.log("Caso frontera invalido", multiplicacion(19007199254740991, 2));
    console.log("Caso invalido por literal", multiplicacion('a', 2));
    console.log("Caso invalido por indefinido", multiplicacion(undefined, 2));
    console.log("Caso sin argumentos", multiplicacion());
    console.log("Caso cohersion de tipo", multiplicacion("2", "3"));
    console.log("Caso con nulo", multiplicacion(null, 2));
    console.log("Caso con negativo", multiplicacion(-3, 2));
    console.log("Caso con ambos negativos", multiplicacion(-3, -2));

console.groupEnd();


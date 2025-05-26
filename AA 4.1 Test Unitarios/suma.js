function suma(a, b){
    return a+b;
}

// a) Igualdad exacta
function sumaDiezDiez() {
  return 10 + 10;
}

// b) Comparación de objetos
function obtenerPersona() {
  return { nombre: 'Kenji', edad: 21 };
}

// c) Valores nulos, definidos, indefinidos
function obtenerValores() {
  return {
    valorNulo: null,
    valorIndefinido: undefined,
    valorDefinido: 'algo'
  };
}

// d) Comparaciones numéricas
function obtenerNumero() {
  return 15;
}

// e) Coincidencia de cadenas
function obtenerFrase() {
  return 'Hola, este es un mensaje secreto';
}

// f) Verificación en Arrays
function obtenerArray() {
  return ['manzana', 'banana', 'naranja'];
}

// g) Negación de Matchers
function obtenerValorNegado() {
  return 5;
}

// h) Pruebas con promesas
function promesaExitosa() {
  return Promise.resolve('éxito');
}

function promesaFallida() {
  return Promise.reject('error');
}

module.exports = {
    suma,
    sumaDiezDiez,
    obtenerPersona,
    obtenerValores,
    obtenerNumero,
    obtenerFrase,
    obtenerArray,
    obtenerValorNegado,
    promesaExitosa,
    promesaFallida
};
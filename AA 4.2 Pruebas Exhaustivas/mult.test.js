const multiplicacion = require('./mult');

describe('Casos pruebas Jest', () => {
    // Caso normal
    test('multiplicacion de 2 por 3', () => {
        expect(multiplicacion(2, 3)).toBe(6);
    });

    // Caso con decimales
    test('multiplicacion de 1.5 por 4.5', () => {
        expect(multiplicacion(1.5, 4.5)).toBeCloseTo(6.75);
    });

    // Caso frontera minimo
    test('multiplicacion de 0 por 5', () => {
        expect(multiplicacion(0, 5)).toBe(0);
    });

    // Caso frontera maximo
    test('multiplicacion de Number.MAX_SAFE_INTEGER por 2', () => {
        expect(multiplicacion(Number.MAX_SAFE_INTEGER, 2)).toBe(Number.MAX_SAFE_INTEGER * 2);
    });

    // Caso frontera invalido
    test('multiplicacion de 19007199254740991 por 2', () => {
        expect(multiplicacion(19007199254740991, 2)).toThrow();
    });

    // Caso invalido por literal
    test('multiplicacion de a por 2', () => {
        expect(multiplicacion('a', 2)).toBeNaN();
    });

    // Caso invalido por indefinido
    test('multiplicacion de undefined por 2', () => {
        expect(multiplicacion(undefined, 2)).toBeNaN();
    });

    // Caso sin argumentos
    test('multiplicacion sin argumentos', () => {
        expect(multiplicacion()).toBeNaN();
    });

    // Caso cohersion de tipo
    test('multiplicacion de "2" por "3"', () => {
        expect(multiplicacion("2", "3")).toBe(6);
    });

    // Caso con nulo
    test('multiplicacion de null por 2', () => {
        expect(multiplicacion(null, 2)).toBe(0);
    });

    // Caso con negativo
    test('multiplicacion de -3 por 2', () => {
        expect(multiplicacion(-3, 2)).toBe(-6);
    });

    // Caso con ambos negativos
    test('multiplicacion de -3 por -2', () => {
        expect(multiplicacion(-3, -2)).toBe(6);
    });

});
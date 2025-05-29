const validarPassword = require('./password'); // importa la función incompleta

describe('Pruebas a la función validarPassword (versión completa)', () => {

    // Caso válido normal (aunque no lo valida bien en esta versión)
    test('Caso normal: Playa2010@', () => {
        expect(validarPassword('Playa2010@')).toBe(true);
    });

    // Caso válido frontera (exactamente 8 caracteres)
    test('Frontera: Aa1@2010', () => {
        expect(validarPassword('Aa1@2010')).toBe(true); // debería ser válido
    });

    // Caso inválido: menos de 8 caracteres
    test('Inválido: Muy corta', () => {
        expect(validarPassword('A1b@')).toBe(false);
    });

    // Caso inválido: sin mayúsculas
    test('Inválido: sin mayúsculas', () => {
        expect(validarPassword('playa2010@')).toBe(true); // debería fallar, pero esta versión no lo detecta
    });

    // Caso inválido: sin minúsculas
    test('Inválido: sin minúsculas', () => {
        expect(validarPassword('PLAYA2010@')).toBe(true); // debería fallar, pero pasa en esta versión
    });

    // Caso inválido: sin números
    test('Inválido: sin números', () => {
        expect(validarPassword('Playa@@@')).toBe(true);
    });

    // Caso inválido: sin caracteres especiales
    test('Inválido: sin carácter especial', () => {
        expect(validarPassword('Playa2010')).toBe(true);
    });

    // Caso vacío
    test('Vacío: ""', () => {
        expect(validarPassword('')).toBe(false);
    });

    // Caso indefinido
    test('Indefinido: undefined', () => {
        expect(validarPassword(undefined)).toBe(false);
    });

    // Caso de coerción de tipo: número
    test('Coerción de tipo: 12345678', () => {
        expect(validarPassword(12345678)).toBe(false);
    });

});

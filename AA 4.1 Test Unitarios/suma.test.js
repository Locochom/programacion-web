const {
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
}= require('./suma');

test('suma 1 + 2 es igual a 3', ()  =>{
    expect(suma(1,2)).toBe(3);
});

// a) Igualdad exacta
test('10 + 10 debe ser igual a 20', () => {
  expect(sumaDiezDiez()).toBe(20);
});

// b) Comparación de objetos
test('objetos deben ser iguales con toEqual', () => {
  expect(obtenerPersona()).toEqual({ nombre: 'Kenji', edad: 21 });
});

// c) Valores nulo, indefinido y definido
test('verificar valores null, undefined y definidos', () => {
  const valores = obtenerValores();
  expect(valores.valorNulo).toBeNull();
  expect(valores.valorIndefinido).toBeUndefined();
  expect(valores.valorDefinido).toBeDefined();
});

// d) Comparaciones numéricas
test('comparación numérica', () => {
  const numero = obtenerNumero();
  expect(numero).toBeGreaterThan(10);
  expect(numero).toBeLessThan(20);
  expect(numero).toBeGreaterThanOrEqual(15);
});

// e) Coincidencia con expresiones regulares
test('la frase debe contener "mensaje"', () => {
  expect(obtenerFrase()).toMatch(/mensaje/);
});

// f) Verificación en arrays
test('el array debe contener "banana"', () => {
  expect(obtenerArray()).toContain('banana');
});

// g) Negación con .not
test('5 no debe ser igual a 10', () => {
  expect(obtenerValorNegado()).not.toBe(10);
});

// h) Promesas (resolves y rejects)
test('promesa debe resolverse con "éxito"', async () => {
  await expect(promesaExitosa()).resolves.toBe('éxito');
});

test('promesa debe rechazarse con "error"', async () => {
  await expect(promesaFallida()).rejects.toBe('error');
});
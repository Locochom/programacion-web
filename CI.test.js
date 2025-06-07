const cadenaInversa = require('./CI');
test('invierte la cadena  "hola" a "aloh"',() => {
    expect(cadenaInversa('hola')).toBe('aloh');
});

test('invierte la cadena vacía a cadena vacía', () => {
    expect(cadenaInversa('')).toBe('');
});

test('invierte la cadena con espacios "abc def" a "fed cba"',() =>{
    expect(cadenaInversa('abc def')).toBe('fed cba');
});
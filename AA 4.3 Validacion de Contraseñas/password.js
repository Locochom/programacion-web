/*function validarPassword(password) {
    if (typeof password !== 'string') return false;
    if (password.length < 8) return false;
    return true; // No valida mayúsculas, minúsculas, número, carácter especial, etc.
}

module.exports = validarPassword;
*/

function validarPassword(password) {
  // Validar que sea string y no nulo o indefinido
  if (typeof password !== 'string') return false;

  // Validar longitud mínima
  if (password.length < 8) return false;

  // Expresiones regulares para las validaciones
  const tieneMayuscula = /[A-Z]/.test(password);
  const tieneMinuscula = /[a-z]/.test(password);
  const tieneNumero = /[0-9]/.test(password);
  const tieneEspecial = /[^A-Za-z0-9]/.test(password); // cualquier caracter que no sea letra o número

  // Validar todas las condiciones
  if (!tieneMayuscula) return false;
  if (!tieneMinuscula) return false;
  if (!tieneNumero) return false;
  if (!tieneEspecial) return false;

  // Si pasó todas las validaciones, es válida
  return true;
}

module.exports = validarPassword; // exportar para usar en los tests

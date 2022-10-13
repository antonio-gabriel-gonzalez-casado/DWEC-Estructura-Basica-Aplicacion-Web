/**
 * * Devuelve la cadena "¡Hola Mundo!" y la escribe por consola
 * @return {String}
 */

function holaMundo() {
  console.info("¡Hola Mundo!");
  return "¡Hola Mundo!";
}

if (typeof module !== 'undefined') module.exports.holaMundo = holaMundo;

/**
 * * Devuelve la cadena "¡Hasta Luego!" y la escribe por consola
 * @return {String}
 */

function hastaLuego() {
  console.info("¡Hasta Luego!");
  return "¡Hasta Luego!";
}

if (typeof module !== 'undefined') module.exports.hastaLuego = hastaLuego;

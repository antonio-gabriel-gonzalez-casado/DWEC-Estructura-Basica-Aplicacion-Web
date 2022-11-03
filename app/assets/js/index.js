/**
 * * Devuelve la cadena "¡Hola Mundo!"
 * @return {String}
 */

function holaMundo() {
  console.info("Entrando en el método holaMundo sin parámetros");
  let holaMundo = "¡Hola Mundo!";
  console.info("Saliendo del método hastaLuego con el resultado %s", holaMundo);
  return holaMundo;
}

if (typeof module !== 'undefined') module.exports.holaMundo = holaMundo;

/**
 * * Devuelve la cadena "¡Hasta Luego!"
 * @return {String}
 */

function hastaLuego() {
  console.info("Entrando en el método hastaLuego sin parámetros");
  let hastaLuego = "¡Hasta Luego!";
  console.info("Saliendo del método hastaLuego con el resultado %s", hastaLuego);
  return hastaLuego;
}

if (typeof module !== 'undefined') module.exports.hastaLuego = hastaLuego;

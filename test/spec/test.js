const hastaLuego = require('../../app/assets/js/custom');
const holaMundo = require('../../app/assets/js/custom');

test('Debe devolver la cadena correcta: ¡Hola Mundo!', () => {
  expect(holaMundo()).toBe("¡Hola Mundo!");
});


test('Debe devolver la cadena correcta: ¡Hasta Luego!', () => {
  expect(hastaLuego()).toBe("¡Hasta Luego!");
});


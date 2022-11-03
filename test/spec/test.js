const custom = require("../../app/assets/js");

test("Debe devolver la cadena correcta: ¡Hola Mundo!", () => {
  expect(custom.holaMundo()).toBe("¡Hola Mundo!");
});

test("Debe devolver la cadena correcta: ¡Hasta Luego!", () => {
  expect(custom.hastaLuego()).toBe("¡Hasta Luego!");
});

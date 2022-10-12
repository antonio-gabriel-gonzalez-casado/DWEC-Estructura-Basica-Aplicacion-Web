# Esqueleto Básico Aplicación Web: Node

Este proyecto de ejemplo está escrito en Node y testeado en Jest.

[![Node.js CI](https://github.com/antonio-gabriel-gonzalez-casado/DWEC-Estructura-Basica-Aplicacion-Web/actions/workflows/node.js.yml/badge.svg)](https://github.com/antonio-gabriel-gonzalez-casado/DWEC-Estructura-Basica-Aplicacion-Web/actions/workflows/node.js.yml)

## Ejercicio

Uno de los test está fallando porque no está devolviendo la cadena correcta. Arregla la función para que devuelva la cadena necesaria para poder pasar el test.

### Comando de instalación

`npm install` 

### Comando de ejecución de test

`npm test`

## Activar Extensiones

A continuación se detalla la configuración de las distintas extensiones

### ESlint

Instalar eslint en el workspace

`npm install eslint`

Configurar las opciones en base al proyecto

`npm init @eslint/config`

How would you like to use ESLint?

> To check syntax and find problems

What type of modules does your project use?

> commonjs

Which framework does your project use?

> None of these

Does your project use TypeScript?

> No

Where does your code run?

> Node

What format do you want your config file to be in?

> JSON

En el fichero .elintrc.json añadir al nodo env la siguiente configuración para quitar los errores de ESLint en los test unitarios
`"jest": true`

### Prettier

-

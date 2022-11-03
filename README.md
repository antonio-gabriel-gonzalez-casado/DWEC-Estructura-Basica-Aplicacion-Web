# Esqueleto Básico Aplicación Web: Node

Este proyecto de ejemplo está escrito en Node y testeado en Jest.

[![Node.js CI](https://github.com/antonio-gabriel-gonzalez-casado/DWEC-Estructura-Basica-Aplicacion-Web/actions/workflows/node.js.yml/badge.svg)](https://github.com/antonio-gabriel-gonzalez-casado/DWEC-Estructura-Basica-Aplicacion-Web/actions/workflows/node.js.yml)



### Inicializa el proyecto node

`npm init`

### Crear la siguiente estructura:

├───app/
│   ├───assets/
│   │   ├───css/
│   │   │   └───style.css
│   │   ├───fonts/
│   │   ├───icons/
│   │   ├───images/
│   │   │   └───logo.png
│   │   └───js/
│   │       └───custom.js
│   ├───favicon.png
│   └───index.html
├───test/
│   ├───spec/
│   │   └───test.js
│   └───index.html
├───LICENSE
├───README.md
├───package-lock.json
└───package.json

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


### Comando de instalación

`npm install` 

### Comando de ejecución de test

`npm test` 

### Instalar JQuery
Descarga la versión 3.2.1 slim min de JQuery en el directorio assets/js/ 
Añadelo al final del body del index.html mediante la siguiente sentencia:
`<script defer src="assets/js/jquery-3.2.1.slim.min.js"></script>`


### Instalar Bootstrap
Entrar en la web de descargas de Boostrap y descargar la última versión en la sección Compiled CSS and JS.
Mover los directorios css y js al directorio assets/bootstrap.
Añadir en el head del index.html el la siguiente sentecia:
`<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">`
Añadir en al final del body la siguiente sentecia:
`<script defer src="assets/bootstrap/js/bootstrap.min.js"></script>`

### Instalar el servidor ligero
`npm install light-server`

### Lanzar el servidor ligero 
`light-server -s . -p 7000`




#Pruebas js de criptografr铆a y JWT








# Backend CRUD API REST

_Ejemplo de WS REST con NodeJS que proporciona un API CRUD para gestionar una DB MongoDB aplic谩ndole seguridad._

## Comenzando 馃殌

_Estas instrucciones te permitir谩n obtener una copia del proyecto en funcionamiento en tu m谩quina local para prop贸sitos de desarrollo y pruebas._

Ver **Deployment** para conocer c贸mo desplegar el proyecto.


### Pre-requisitos 馃搵

路Es necesario tener un equpo Windows, Linux u OS X con conexi贸n a internet. 
路Es preferible tener instalada una m谩quina virtual con LINUX para tener un seguimiento y mantenimiento futuros m谩s sencillos. 
 Es recomendable que la m谩quina virtual:
	-tenga un m铆nimo de 2GHz de procesador
	-tenga m铆nimo 4GB de RAM
	-tenga 25GB de HD
	-asegurarnos de tener la 煤ltima versi贸n estable de 64 bits de la distribuci贸n de Ubuntu de Linux, por el momento es la 20.04 LTS.
(La m谩quina virtual se puede crear desde VirtualBox.)
路Tener instaladas las siguientes aplicaciones:
	-Visual Studio Code m谩s plugins para Node, JS y TS.
	-Postman
	-NodeJs- node y npm
	
Para comprobar los datos de la m谩quina virtual abrimos una terminal con 
```
<Ctrl+Alt+T>
$ lsb_release -a
$ uname -m
$ df -h
```

### Instalaci贸n 馃敡

	-npm bcrypt, paquete de javascript que permite utilizar la funci贸n de hashing de contrase帽a.
	-librer铆a moment
	-librer铆a jwt-simple, para tratar los token
	
路 Instalaci贸n npm bcrypt
```
npm i -S bcrypt
```

路 Instalaci贸n librer铆a moment
```
npm i -S moment
```
	
路 Instalaci贸n jwt-simple
```
npm i -S jwt-simple
```
## Ejecutando las pruebas 鈿欙笍
Tenemos tres pruebas una realizada con solo con
En la primera se utiliza un hash para comprobar al usuario.

En la segunda prueba se utiliza PassService y hash para comprobar al usuario.

En la tercera prueba se utiliza el jwt para crear y decodificar el token.


### Analice las pruebas end-to-end 馃敥
En las pruebas se comprobando qu茅 sucede si se le introduce un token o un hash err贸neo. 

Se generar谩 un hash con salt o de manera directa y as铆crona  y se comparar谩 si se le pasa el hash err贸neo o el correcto-> en la primera prueba( 01_bcrypt.js).

Se crean funciones para encriptar y comparar los hash con PassService-> segunda prueba (03_pass-test.js)

Se crean con jwt funciones para crear,comparar y decodificar tokens -> tercera prueba(04_jwt-text.js)





## Despliegue 馃摝
Se tendr谩 que clonar el repositorio con git clone https://github.com/amsg18/api-rest.git

## Construido con 馃洜锔?

* [Visual Studio](https://code.visualstudio.com/) - Editor de texto



## Versionado 馃搶
Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/amsg18/api-rest/tags).

## Autores 鉁掞笍

* **Ana M陋 Soler** - *Realizaci贸n del trabajo y documentaci贸n* - [amsg18](#https://github.com/amsg18)


## Licencia 馃搫
Este proyecto no est谩 bajo ninguna licencia.
 

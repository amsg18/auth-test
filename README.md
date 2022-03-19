#Pruebas js de criptografría y JWT








# Backend CRUD API REST

_Ejemplo de WS REST con NodeJS que proporciona un API CRUD para gestionar una DB MongoDB aplicándole seguridad._

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Ver **Deployment** para conocer cómo desplegar el proyecto.


### Pre-requisitos 📋

·Es necesario tener un equpo Windows, Linux u OS X con conexión a internet. 
·Es preferible tener instalada una máquina virtual con LINUX para tener un seguimiento y mantenimiento futuros más sencillos. 
 Es recomendable que la máquina virtual:
	-tenga un mínimo de 2GHz de procesador
	-tenga mínimo 4GB de RAM
	-tenga 25GB de HD
	-asegurarnos de tener la última versión estable de 64 bits de la distribución de Ubuntu de Linux, por el momento es la 20.04 LTS.
(La máquina virtual se puede crear desde VirtualBox.)
·Tener instaladas las siguientes aplicaciones:
	-Visual Studio Code más plugins para Node, JS y TS.
	-Postman
	-NodeJs- node y npm
	
Para comprobar los datos de la máquina virtual abrimos una terminal con 
```
<Ctrl+Alt+T>
$ lsb_release -a
$ uname -m
$ df -h
```

### Instalación 🔧

	-npm bcrypt, paquete de javascript que permite utilizar la función de hashing de contraseña.
	-librería moment
	-librería jwt-simple, para tratar los token
	
· Instalación npm bcrypt
```
npm i -S bcrypt
```

· Instalación librería moment
```
npm i -S moment
```
	
· Instalación jwt-simple
```
npm i -S jwt-simple
```
## Ejecutando las pruebas ⚙️
Tenemos tres pruebas una realizada con solo con
En la primera se utiliza un hash para comprobar al usuario.

En la segunda prueba se utiliza PassService y hash para comprobar al usuario.

En la tercera prueba se utiliza el jwt para crear y decodificar el token.


### Analice las pruebas end-to-end 🔩
En las pruebas se comprobando qué sucede si se le introduce un token o un hash erróneo. 

Se generará un hash con salt o de manera directa y asícrona  y se comparará si se le pasa el hash erróneo o el correcto-> en la primera prueba( 01_bcrypt.js).

Se crean funciones para encriptar y comparar los hash con PassService-> segunda prueba (03_pass-test.js)

Se crean con jwt funciones para crear,comparar y decodificar tokens -> tercera prueba(04_jwt-text.js)


hash no se decodifica
token si que se puede convertir en contraseña



## Despliegue 📦
Se tendrá que clonar el repositorio con git clone https://github.com/amsg18/api-rest.git

## Construido con 🛠️

* [Visual Studio](https://code.visualstudio.com/) - Editor de texto



## Versionado 📌
Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/amsg18/api-rest/tags).

## Autores ✒️

* **Ana Mª Soler** - *Realización del trabajo y documentación* - [amsg18](#https://github.com/amsg18)


## Licencia 📄
Este proyecto no está bajo ninguna licencia.
 

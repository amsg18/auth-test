'use strict'

const TokenService= require('./services/token.services');
const moment = require('moment');
//Datos para simulación

const miPass= "MiContraseña";
const badPass= "Miotracontraseña";
const usuario={
    _id: '1234567898',
    email: 'amsg18@gcloud.ua.es',
    displatName: 'Ana Soler',
    password:miPass,
    signUpDate:moment().unix(),
    lastLogin: moment().unix()
};
console.log(usuario);

//Creamos un token de manera síncrona
const token= TokenService.creaToken(usuario);
//console.log(token);

//Decodificar un token
TokenService.decodificaToken(token)
    .then(userId=>{
         return console.log(`ID1: ${userId}`);

    })
    .catch(err => console.log(err));

    //Decodificar un token erróneo
 const badToken="hhhCHakb5a54njclAjndljc5545";   
TokenService.decodificaToken(badToken)
.then(userId=>{
     return console.log(`ID1: ${userId}`);

})
.catch(err => console.log(err));



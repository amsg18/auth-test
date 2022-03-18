'use strict'
const PassService = require('./services/pass.services');
const moment =require('moment');
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
//Encriptamos el password

PassService.encriptaPassword(usuario.password)
    .then(hash=>{
        usuario.password=hash;
        console.log(usuario);
        //Verificamos password
        PassService.comparaPassword(miPass,usuario.password)
            .then(isOk=>{
                if(isOk){
                    console.log(`Prueba 1: El password es correcto`);
                }
                else {
                    console.log(`Prueba 1: El password es incorrecto`);
            }    
            })
            //caturamos lo que ha ido mal
            .catch(err => console.log(err));

            
             //Verificamos password contra una pass falsa
        PassService.comparaPassword(badPass,usuario.password)
        .then(isOk=>{
            if(isOk){
                console.log(`Prueba 2: El password es correcto`);
            }
            else {
                console.log(`Prueba 2: El password es incorrecto`);
        }    
        })
        //caturamos lo que ha ido mal
        .catch(err => console.log(err));

    })

    
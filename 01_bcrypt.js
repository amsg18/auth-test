'use strict'
//Formato del hash es
    //$2b$10$iCVuew9hfe73KI8jxlobr.z9H6LecTxEywJKNA6yQ88eFbcglvHme
//    ****--************************++++++++++++++++++++++++++++++
//     Alg cont Salt                    Hash
//importamos la librería
const bcrypt = require('bcrypt');

//Datos para simulación

const miPass= "MiContraseña";
const badPass= "Miotracontraseña";

//salt bcrypt.salt(10);
//hash = bcrypt.hash(miPass,salt);
//db.users.update(id, hash);
//db.account.hush.update(id, salt):

//Creamos el Salt

bcrypt.genSalt(15,(err,salt) =>{
   console.log(`Salt 1: ${salt}`);    
   
   //Utilizamos el Salt para generar un hash
    
   bcrypt.hash(miPass,salt,(err,hash)=>{
    if(err) console.log(err);
    else console.log(`Hash 1 : ${hash}`);
   });

});

//Creamos el hash directamente   recordar que esto va asíncrono
bcrypt.hash(miPass,10,(err,hash)=>{
    if(err)console.log(err);
    else {
        console.log(`Hash 2: ${hash}`);
    
    //Comprobamos utilizando la contraseña correcta
    
    bcrypt.compare(miPass,hash,(err, result)=>{
        console.log(`Result 2.1: ${result}`);
    });
    //Comporbamos utilixando la contraseña incorrecta
    bcrypt.compare(miPass,badPass,(err, result)=>{
        console.log(`Result 2.2 ${result}`);
    });    
    };
});
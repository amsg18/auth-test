'use strict'

//libreria que me permita manipular los web token

const jwt= require('jwt-simple');
const moment= require('moment');

const SECRET= require('../config').secret;
const EXP_TIME= require('../config').tokenExpTmp;
//creatoken
//devuelve un token tipo JWT
    //Formato JWT:
//      HEADER.PLAYLOAD.VERIFY_SIGNATURW
//Donde:
//  HEADER(Objeto JSON con el algortimo codificado en base URL64)

//La firma verificada es:
//VERIFY_SIGNATURE = HMACSHA(baseUrlEnconde(HEAD)+"."+baseUrlEnconde(PAYLOAD), SECRET)

function creaToken(user){
    const payload={
        sub: user._id,
        int: moment().unix(),
         exp: moment().add(EXP_TIME,'minutes').unix()

    };
    return jwt.encode(payload,SECRET);
}

//decodificaToken
// devuelve el identificador del usuario

function decodificaToken(token){
    return new Promise((resolve,reject)=>{
        try{    
            const payload= jwt.decode(token, SECRET, true);
            if(payload.exp <= moment().unix()){
                reject({
                    status: 401,
                    message: 'El token ha caducado'
                });
                resolve(payload.sub);
            }
        }catch{
            reject({
                status:500,
                message: 'El token no es válido'
            });

        }


    })

}

module.exports={
    creaToken,
    decodificaToken

};
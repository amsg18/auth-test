'use strict'

const bcrypt= require('bcrypt');


//encriptaPassword

//Devuelve un hash con un salt en formato:
    //$2b$10$iCVuew9hfe73KI8jxlobr.z9H6LecTxEywJKNA6yQ88eFbcglvHme
//    ****--************************++++++++++++++++++++++++++++++
//     Alg cont Salt                    Hash
function encriptaPassword(password){
    return bcrypt.hash(password,10);
}

//comparaPassword
//Devuelve veraddero o falso si coincide o  no el password y el hash

function comparaPassword(password,hash){
    return bcrypt.compare(password,hash);
}

module.exports={
    encriptaPassword,
    comparaPassword

};
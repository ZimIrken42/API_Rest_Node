const lib = require('./index.js')

console.log(Object.keys(lib));

// cryptico lib node module

prvKey = lib.prvKey
prvPub = lib.pubKey

// console.log(prvPub);

let encriptedMesage = ''
let dencriptedMesage = ''

let encriptada = ( valor ) => encriptedMesage = valor;

let mensage = '- GO TO HELLL -';

console.log ( "MESSAGE ENCRIPTED" );

lib.encrypticon ( mensage, prvPub, encriptada )
// (async () => await lib.encrypticon(mensage, prvPub)
//                .then(res => console.log(res))) ()
// let encriptedMesage = lib.encrypticon(mensage, prvPub).then(res => res)
setInterval(() => console.log(encriptedMesage), 1000);
/*
// console.log(encriptedMesage);
decriptada = ( valor ) => console.log( valor );
// let mensageDecripted = lib.decrypticon(encriptedMesage.cipher, prvKey)
lib.decrypticon ( encriptedMesage.cipher, prvKey, decriptada)
console.log ( "MESSAGE DENCRIPTED" );
// console.log(mensageDecripted);


//
// console.log(Object.keys(lib.forge));
// console.log(forge.util);
// bly = forge.SHA512(cryptico.string2bytes('hell').join(''))

//console.log(random);

// console.log(cryptico.string2bytes('hell').join(''));

// s = 'fasdfasdf'
// key = (req) => {
// 	console.log(req);
// }

// setTimeout(key.bind(null, s), 1);
// console.log(s.o);

// console.log(exec);
// exec(f)
// exec(genRandomKey,keys)
// a = setTimeout(genRandomKey,1,randomkey, 'asdf')
// console.log(a);
 //console.log(keys);
// setTimeout(() => console.log(keys),1000);
// console.log(keys.prvKey);
	/// VIEWWWW ASYNC AWAIT IN
// The length of the RSA key, in bits.
// console.log(keys);

// console.log('BITS');

// var prvKey = cryptico.generateRSAKey(randomkey, Bits);
//
// var pubKey = cryptico.publicKeyString(MattsRSAkey);

// console.log(cryptico);
// let text = 'ola'
// let text = Array(1000).join('JAVASCRIPT HELLL.')
// cipherText = encrypticon(text, keys.pubKey).cipher
//
// // fdec = decrypticon('oKAwtQGRjfD5Ttvi9UdmKijqHUKngkBitm4n102k0jo', keys.prvKey)//.plaintext
// decry = decrypticon(cipherText, keys.prvKey)//.plaintext
// // console.log(cipherText);
// // console.log (decry)
// // console.log(fdec);
// if (decry.status == 'success') console.log('OK');
*/

const crypto = require('./index.js');

// console.log(cryptor);
console.log(Object.keys(crypto));

// /// BASE64
// console.log(crypto.base64)
//
// let olaen = crypto.base64.encode('ola')
// console.log(olaen);
// console.log(crypto.base64.decode(olaen));
//
//
// s = x => console.log(x);
//
// // s(crypto.publicKey)
//
//
//
// //// TOKEN JWT
// // create token
// a = crypto.token({data : {Ola : '^^'}})('ola')
// console.log(a);
//
// console.log('########################## VALID');
// console.log(crypto.validToken(a)('ola'))
//
// //// decripot token
// // //ad = crypto.descriptToken(a)('ola')
// // try {
// // 	invadecToken = crypto.descriptToken(
// // 		'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.'+
// // 		'ImV5SlBiR0VpT2lKZVhpSXNJbVJoZEdVaU9qRTBP'+
// // 		'VGMzTXpZek9UZzJOaklzSW1WemNHUWlPakUwT1RjM016WTBOVGcyTmpJc0luWmhiR2xrSWp'+
// // 		'veE5EazNOek0yTXprNE5qWXlmUT09Ig.ZITVfXtiRWuSOfT1emXlsw5AngV5xX7DtGuyLvvc')('ola')
// // } catch (e){
// // 	console.log('ERRO '+e);
// // }
// // console.log('lib');
// // console.log(decoToken);
//
// let ad = crypto.jwt.decode(a, 'ola')
// console.log('Token Result : '+ad);
//
// //// decode Token
// let as = crypto.base64.decode(ad)
// console.log('Decode Token Result : '+as);

///// Convert String => Object
// let ass = JSON.parse(as)
// console.log(ass.Ola);

console.log(crypto.publicKey);
mes = crypto.encrypticon('ola', crypto.publicKey)

console.log(mes);

mesg = crypto.decrypticon(mes.cipher
										, crypto.prvlickey)

console.log(mesg);
//// sha512
// let shaVoid = crypto.sha512('')
// console.log(shaVoid);


// console.log('session : '+crypto.session);

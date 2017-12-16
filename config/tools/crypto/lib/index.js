const cryptico = require('cryptico')
const forge = require('node-forge')
const jwt = require('jwt-simple')
const timer = require('../../../timer')// .main.exec // deprecated
const random = require('secure-random')

const keys = {
	priv : '', // interno secreto
	prvKey : '', // externos
	pubKey : '',
	session : ''
}

const Bits = 1024;

const genRandomKey = () => forge.sha512.create().update(
														random.randomUint8Array(20)
																).digest().toHex()

keys.priv = genRandomKey()
keys.session = genRandomKey()

const rsaKeys = keys => Bits => {

	keys.prvKey = cryptico.generateRSAKey(keys.priv, Bits)
	//console.log(keys.prvKey);
	keys.pubKey = cryptico.publicKeyString(keys.prvKey)
	// console.log(keys.pubKey);
}

rsaKeys(keys)(Bits)

// console.log('keus');

const gereiteRsaKey = () => rsaKeys(keys)(Bits)

const agendGenereteRandomKey = () => {

	keys.priv = genRandomKey()
	keys.session = genRandomKey()

	setTimeout(gereiteRsaKey, (7*1000*60))
	// console.log('WORK '+ process.pid);
}

timer.core.insert(agendGenereteRandomKey)

const encrypticon = (cipher, key) => {
	return new cryptico.encrypt(cipher, key)
}
const decrypticon = (crypt, key) => {
	return new cryptico.decrypt(crypt, key)
}

module.exports = {
	/// JWT session
	session : keys.session,
	// cryptico + forge = RSAkey
	prvKey : keys.prvKey,
	pubKey : keys.pubKey,
	// cryptico tools RSA
	encrypticon : encrypticon,
	decrypticon : decrypticon,
	/// libs
	// jwt-simple
	jwt : jwt,
	// forge
	forge : forge,
	// cryptico
	cryptico : cryptico


}

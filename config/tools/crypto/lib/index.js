const cryptico = require ( 'cryptico' )
const forge = require ( 'node-forge' )
const jwt = require ( 'jwt-simple' )
const timerCore = require ( '../../../timer' )// .main.exec // deprecated
const random = require ( 'secure-random' )


const keys = {
	priv : '', // interno secreto
	prvKey : '', // externos
	pubKey : '',
	session : ''
}

const Bits = 1024;

const genRandomKey = async () => forge.sha512.create ().update (
																	random.randomUint8Array ( 20 ) )
																				.digest ().toHex ()

( async () => {
	keys.priv = await genRandomKey ()
	keys.session = await genRandomKey ()
} )()

const rsaKeys = async ( keys, Bits ) => {

	keys.prvKey = cryptico.generateRSAKey ( keys.priv, Bits )
	//console.log(keys.prvKey);
	keys.pubKey = cryptico.publicKeyString ( keys.prvKey )
	// console.log(keys.pubKey);
}

( async () => await rsaKeys ( keys, Bits ) )()

// console.log('keus');

const gereiteRsaKey = async () => await rsaKeys (keys, Bits)

const agendGenereteRandomKey = async () => {

	keys.priv = await genRandomKey ()
	keys.session = await genRandomKey ()

	setTimeout ( gereiteRsaKey, ( 7 * 1000 * 60 ) )
	console.log('WORK '+ process.pid);
}

timerCore.core.insert ( agendGenereteRandomKey )

const encrypticon = async ( cipher, key, callback ) => {
	let encrypt = async () => new cryptico.encrypt ( cipher, key )
	callback ( await encrypt () )
}
const decrypticon = async ( crypt, key, callback ) => {
	let decrypt = async () => new cryptico.decrypt ( crypt, key )
	callback ( await decrypt () )
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

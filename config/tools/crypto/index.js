const lib = require ( './lib' )

//// TOOLS FOR CRYPTO !!!!!!!!!!!!!!!!!!!!!!11

const base64 = {
	encode : valor => lib.forge.util.encode64 ( valor ),
	decode : valor => lib.forge.util.decode64 ( valor )
}

const sha = value => lib.forge.sha512.create().update ( value )
															.digest().toHex()

const createToken = payload => key => lib.jwt.encode ( payload, key )

const Token = obj => key => {
	obj [ 'time' ] = new Date().getTime()
	obj [ 'espd' ] = new Date().getTime() + (60 * 1000)
	obj [ 'valid' ] = new Date().getTime()
	return createToken ( base64.encode ( JSON.stringify ( obj ) ) )( key )
}

// const decipherToken = token => key => lib.jwt.decode(token, key)

const decipher = token => key => JSON.parse ( base64.decode (
														lib.jwt.decode ( token, key ) ) ).data

const validToken = token => key => {

	try {

		token = decipher ( token )( key )
	} catch ( e ) {
		// console.log('ERROR '+e);
		return false
	} return true
}

module.exports = {
	/// JWT session
	session : lib.session,
	/// cryptico + forge = RSA Keys
  publicKey : lib.pubKey,
	prvlickey : lib.prvKey,
	// jwt-simple
	token : Token,
	validToken : validToken,
	descriptToken : decipher,
	// cryptico tools RSA
	encrypticon : lib.encrypticon,
	decrypticon : lib.decrypticon,
	/// libs
	jwt : lib.jwt,
	cryptico : lib.cryptico,
	forge : lib.forge,
	/// tools
	sha512 : sha,
	base64 : base64

}

const config = require ( "../../../../config" )

const crypto = config.tools.crypto

module.exports = ( app ) => {

  app.post ( '/app/au/:id', ( req, res ) => { // au : authentication user

		const cryPubCli = req.params.id

		new Promise ( ( responseRequest, rej ) => {

			// console.log( crypto.prvlickey );
			// console.log( Object.keys( crypto.base64.decode( cryPubCli ) ) )
			try {

				responseRequest ( crypto.decrypticon( crypto.base64.decode( cryPubCli ),
																	crypto.prvlickey ).plaintext )
			} catch ( e ) {
				console.log( 'ERROR : ' + e );
				// res.send( '' )
			}

		} ).then ( responsePagePubKey => {
			// console.log( 'ok' );
			// console.log( 'responsePagePubKey :'+responsePagePubKey );
			new Promise ( ( responseRequest, rej ) => {
				try {

					responseRequest ( crypto.encrypticon ( crypto.base64.encode (
										crypto.session ), responsePagePubKey ) )
				} catch ( e ) {
					console.log( 'ERROR : '+e );
				}

			} ).then ( pageResponse => {
				// console.log( pageResponse );
				res.send ( pageResponse )
			} )
		} ).catch ( err => console.log( err ) )
  } )
	app.post ( '/app/cp', ( req, res ) => { // check is page

		new Promise ( ( responseRequest, rej ) => {

			responseRequest ( crypto.base64.encode (
				crypto.sha512 ( crypto.sha512( crypto.session )
			 ) ) )
																// crypto.session ) )
		} ).then ( page => {
			// console.log( page );
			res.send ( ( page ) )
		} )
	} )
	app.post ( '/app/cp/:id', ( req, res ) => { // check and send Pubkey

		const resultClientRequest = req.params.id

		new Promise ( ( responseRequest, rej ) => {

			if ( crypto.base64.encode ( crypto.sha512 ( crypto.sha512 (
										crypto.sha512( crypto.session ) )+
												':'+"I'm Fin._" ) ) ==
									 		resultClientRequest ) {
				responseRequest( crypto.publicKey );
			}
			else rej ( '' )
																// crypto.session ) )
		} ).then ( page => {
			// console.log( 'key '+page );
			// console.log( crypto.session );

			// res.send( crypto.base64.encode( crypto.encrypticon(
			// 						crypto.session, privKeyBrowser ) ) )

			res.send ( ( page ) )
		} )// .catch( rejected => res.send( rejected ) )
	} )
	app.put ( '/app/cp/:id', ( req, res ) => { // cp : check pass

		const jwt = req.params.id

		// crypto.base64.encode( JSON.stringify( crypto.sha512(
		// 						( jwt === crypto.sha512( crypto.sha512( 'sec' ) ) ) ) ) )
		new Promise ( ( responseRequest, rej ) => {
			// console.log( jwt );
			// console.log( crypto.session );
			responseRequest ( crypto.base64.encode (
				crypto.sha512 ( crypto.sha512 ( crypto.session ) ) ) )
																// crypto.session ) )
		} ).then ( responsePage => res.send ( ( responsePage ) ) )
	} )

  return app
}

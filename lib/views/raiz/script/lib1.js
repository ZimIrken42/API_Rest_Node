'use strict'
////
// version 2.6
console.log( 'begin' )

const pull = ( () => {

	let pool //  = 'sec'
	let inicied = false

	const set = po => {

		inicied = true;
		pool = po;
	}
	const get = () => pool
	const ini = () => inicied

	return {
		get: get,
		set : set,
		ini : ini
	}
} ) ()

// console.log( secureRandom.randomUint8Array( 20 ) );
// console.log ( pull.set( 42 ) )
// console.log( pull.get() );
// var io = window.crypto.getRandomValues( new Uint32Array( 10 ) );
// console.log( io.join( '' ) )
// console.log( window );
// console.log( 'Sha : '+SHA512( '' ) );

//console.log( aes )

const render = tex => {
	div.innerHTML = '<h1>'+tex+'</h1>'
}


// ############################## : Window atob btoa Base64
// var a = window.btoa( 'asdfasdf' );
// console.log( a )
// var a = window.btoa( a );
// var b = window.atob( a )
// console.log( 'result b: '+b );
//  var c = window.atob( b )
// console.log( 'result a : '+c );
// console.log( window.crypto )
const sha = SHA512
// const sha = value => forge.sha512.create().update( value )
		//					.digest().toHex()
// console.log( 'sha : '+sha( '' ) )

const createToken = payload => key => encode( payload, key )

const Token = obj => key => {
	obj [ 'time' ] = new Date () .getTime ()
	obj [ 'espd' ] = new Date () .getTime () + ( 60 * 1000 )
	obj [ 'valid' ] = new Date () .getTime ()
	// return createToken( b64.encode( JSON.stringify( obj ) ) )( key ) /// deprecated
	return createToken ( window.btoa ( JSON.stringify ( obj ) ) )( key )
}

// const decipherToken = token => key => decode( token, key )

const decipher = token => key => decode ( token, key )

//// AJAX
var XMLHttpFactories = [
		function () { return new XMLHttpRequest() },
		function () { return new ActiveXObject ( "Msxml2.XMLHTTP" ) },
		function () { return new ActiveXObject ( "Msxml3.XMLHTTP" ) },
		function () { return new ActiveXObject ( "Microsoft.XMLHTTP" ) }
];

function createXMLHTTPObject() {
		var xmlhttp = false;
		for ( var i=0;i<XMLHttpFactories.length;i++ ) {
				try {
						xmlhttp = XMLHttpFactories[i]();
				}
				catch ( e ) {
						continue;
				}
				break;
		}
		return xmlhttp;
}

function sendRequest( url,callback,postData ) {
		var req = createXMLHTTPObject();
		if ( !req ) { console.log( 'ERRO' );return;};
		var method = ( postData ) ? postData : "GET";
		req.open( method,url,true );
		// req.setRequestHeader( 'User-Agent','XMLHTTP/1.0' );
		if ( postData )
			// req.setRequestHeader( 'Content-type','application/x-www-form-urlencoded' );
		req.onreadystatechange = function () {
				if ( req.readyState != 4 ) return;
				if ( req.status != 200 && req.status != 304 ) {
//          alert( 'HTTP error ' + req.status );
						console.log( 'HTTP error ' + req.status );
						return;
				}
				callback( req );
				return req
		}
		if ( req.readyState == 4 ) return;
		req.send( postData );
		return req
}

var request = ( url,callback,postData ) =>
		sendRequest( url,callback,postData )

const validToken = token => key => {
	try {

		token = decipher( token )( key )
	} catch ( e ) {
		console.log( 'ERROR '+e );
		return false
	} return true
}

// const isKey = key => !!( key.get() )
const validKey = ( key, callback ) =>{

	new Promise ( ( res, rej ) => {
		const rota = '/app/cp/'+window.btoa( sha( sha( key ) ) )

		// console.log( rota );

		const action = valor => {
				// if ( ( b64.decode( res.responseText ) ) == ( sha( sha( key ) ) ) )
				if ( sha( sha( key ) ) == window.atob( valor.responseText ) )
						res( true )
				else
					rej( false )
		}

		request( rota, action,'PUT' )
	} ).then( res => callback( res ) )
	.catch( rej => callback( rej ) )
}
/// cryptico
const getKey = callbackFunc => {
	const keys = {
		priv : '', // interno secreto
		prvKey : '', // externos
		pubKey : '',
		session : ''
	}

	const Bits = 1024;

	const genRandomKey = () => sha( window.crypto.getRandomValues(
															secureRandom.randomUint8Array( 20 ) ) );

	keys.priv = genRandomKey()

	// console.log( keys.priv );

	const rsaKeys = keys => Bits => {

		keys.prvKey = cryptico.generateRSAKey( keys.priv, Bits )
		keys.pubKey = cryptico.publicKeyString( keys.prvKey )
	}

	rsaKeys( keys )( Bits )

	const encrypticon = ( cipher, key ) => {
		return new cryptico.encrypt( cipher, key )
	}
	const decrypticon = ( crypt, key ) => {
		return new cryptico.decrypt( crypt, key )
	}

	new Promise ( ( res, rej ) => {
		const rota = '/app/cp'

		const action = valor => {
			if ( valor.responseText ) res( valor.responseText )
			else rej( "Error Server Not Found : check" );
		}

		request( rota, action,'POST' )
	} ).then( resha => {
		// console.log( window.atob( res ) )
		new Promise ( ( reserver, rej ) => {
			const rota = '/app/cp/'+window.btoa( sha( window.atob( resha )+
																			':'+"I'm Fin._" ) );

			const action = valor => {
				if ( valor.responseText ) reserver( valor.responseText )
				else rej( "Error Server Not Found : inpt pub server" );
			}

			request( rota, action,'POST' )
		} ).then( cry => {
			// console.log( cry );
			new Promise ( ( reserver, rej ) => {
				// console.log( keys.pubKey );
				// console.log( window.btoa( encrypticon( keys.pubKey, cry ).cipher ) )
				const rota = '/app/au/'+window.btoa( encrypticon(
																		keys.pubKey, cry ).cipher );
				// console.log( 'return server : '+window.btoa( encrypticon( keys.pubKey, cry ) ) )
				const action = valor => {
					// console.log( valor );
					if ( valor.responseText ) reserver( valor.responseText )
					else rej( "Error Server Not Found : put prv page" );
				}

				request( rota, action,'POST' )
			} ).then( returned => {
				// console.log( JSON.parse( returned ).cipher );
				new Promise ( ( resultDecrypt, rej ) => {
					try {
						resultDecrypt( window.atob( decrypticon( JSON.parse( returned ).cipher,
																		keys.prvKey ).plaintext ) )
					} catch ( e ) {
						console.log( 'ERROR : '+e );
					}
				} ).then( result => {

					// pull.set( result )
					// console.log( pull.get() );
					// render( 'OK' )
					callbackFunc( result )
					// validKey( pull.get(), value => {
					// 		console.log( value );
					// } )
				} )
				// console.log( 'return '+returned );
				// render( 'return '+returned );
			} ).catch( rej => console.log( rej ) ) /// put prvkey page
		} ).catch( rej => console.log( rej ) ) /// input pubkey server
	} ).catch( rej => console.log( rej ) ) /// check page server
} // end getkey


const sendRotesForServer = ( obj, rot, actionCallBack,
								met, key ) => {

	validKey( pull.get() , ( value ) => {

		//if ( validKey( key ) )
		/// console.log( '1 #' )

		const funSend = obj => {

			rot = rot + '/' + obj

			sendRequest( rot,actionCallBack,'POST' )
		}

		if ( value ) {
			obj = Token( obj )( key.get() )

			// console.log( obj )

			funSend( obj )
		} else {
			render( "GET" )
			getKey( pass => {
				// console.log( "GET" );
				pull.set( pass )

				obj = Token( obj )( key.get() )
				funSend( obj )
			} )
		}
	} )
}

const responseServer = token => key => JSON.parse( window.atob( // JSON.parse
						( decipher( token )( key.get() ) ) ) )//.data


var valida = () => {

	var obj = {
		data : {
			name: text.value,
			pass: sha( valor.value )
		}
	}

	let rot = '/tests'

	// const action = x => console.log( responseServer( x.responseText )( key ) ); //render()
	const action = send => render( JSON.stringify
		( responseServer( send.responseText )( pull ) ) )//.data ) ); //render()
	//					 b64.decode( // JSON.parse
	// 			( decipher( x.responseText )( pool ) ) )

	sendRotesForServer( obj,rot, action, 'POST', ( pull ) )

	// rot = '/tests'
	// console.log( b64.decode( decipher( obj )( key ) ) );


}

var get = () => {

	const c = x => render( JSON.stringify( x.responseText ) )

	let rot = '/persona'

	request( rot,c,'GET' )
}

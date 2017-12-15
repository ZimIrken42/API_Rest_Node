'use strict';
////
// version 2.6

console.log('begin');

var pull = function () {

	var pool = 'sec'; //= 'sec'

	var set = function set(po) {
		return pool = po;
	};
	var get = function get() {
		return pool;
	};

	return {
		get: get,
		set: set
	};
}

// console.log (pull.set(42))
// console.log(pull.get());
// var io = window.crypto.getRandomValues(new Uint32Array(10));
// console.log(io.join(''))
();console.log('Sha : ' + SHA512(''));

//console.log(aes)

var render = function render(tex) {
	div.innerHTML = '<h1>' + tex + '</h1>';
};
// ############################## : Window atob btoa Base64
// var a = window.btoa('asdfasdf');
// console.log(a)
// var a = window.btoa(a);
// var b = window.atob(a)
// console.log('result b: '+b);
//  var c = window.atob(b)
// console.log('result a : '+c);
// console.log(window.crypto)

// const sha = value => forge.sha512.create().update(value)
//					.digest().toHex()
var sha = SHA512;

// console.log('sha : '+sha(''))

var createToken = function createToken(payload) {
	return function (key) {
		return encode(payload, key);
	};
};

var Token = function Token(obj) {
	return function (key) {
		obj['time'] = new Date().getTime();
		obj['espd'] = new Date().getTime() + 60 * 1000;
		obj['valid'] = new Date().getTime
		// return createToken(b64.encode(JSON.stringify(obj)))(key) /// deprecated
		();return createToken(window.btoa(JSON.stringify(obj)))(key);
	};
};

// const decipherToken = token => key => decode(token, key)

var decipher = function decipher(token) {
	return function (key) {
		return decode(token, key

		//// AJAX
		);
	};
};var XMLHttpFactories = [function () {
	return new XMLHttpRequest();
}, function () {
	return new ActiveXObject("Msxml2.XMLHTTP");
}, function () {
	return new ActiveXObject("Msxml3.XMLHTTP");
}, function () {
	return new ActiveXObject("Microsoft.XMLHTTP");
}];

function createXMLHTTPObject() {
	var xmlhttp = false;
	for (var i = 0; i < XMLHttpFactories.length; i++) {
		try {
			xmlhttp = XMLHttpFactories[i]();
		} catch (e) {
			continue;
		}
		break;
	}
	return xmlhttp;
}

function sendRequest(url, callback, postData) {
	var req = createXMLHTTPObject();
	if (!req) {
		console.log('ERRO');return;
	};
	var method = postData ? postData : "GET";
	req.open(method, url, true);
	// req.setRequestHeader('User-Agent','XMLHTTP/1.0');
	if (postData)
		// req.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		req.onreadystatechange = function () {
			if (req.readyState != 4) return;
			if (req.status != 200 && req.status != 304) {
				//          alert('HTTP error ' + req.status);
				console.log('HTTP error ' + req.status);
				return;
			}
			callback(req);
			return req;
		};
	if (req.readyState == 4) return;
	req.send(postData);
	return req;
}

var request = function request(url, callback, postData) {
	return sendRequest(url, callback, postData);
};

var validToken = function validToken(token) {
	return function (key) {
		try {

			token = decipher(token)(key);
		} catch (e) {
			/// console.log('ERROR '+e);
			return false;
		}return true;
	};
};

var isKey = function isKey(key) {
	return !!key;
};

/// cryptico
var getKey = function getKey() {
	var keys = {
		priv: '', // interno secreto
		prvKey: '', // externos
		pubKey: '',
		session: ''
	};

	var Bits = 1024;
	/// ###########################################################################
	var genRandomKey = function genRandomKey() {
		return sha(window.crypto.getRandomValues(new Uint32Array(10)));
	};

	keys.priv = genRandomKey();

	var rsaKeys = function rsaKeys(keys) {
		return function (Bits) {

			keys.prvKey = cryptico.generateRSAKey(keys.priv, Bits);
			keys.pubKey = cryptico.publicKeyString(keys.prvKey);
		};
	};

	rsaKeys(keys)(Bits);

	var encrypticon = function encrypticon(cipher, key) {
		return new cryptico.encrypt(cipher, key);
	};
	var decrypticon = function decrypticon(crypt, key) {
		return new cryptico.decrypt(crypt, key);
	};
};

var validKey = function validKey(key, callback) {

	new Promise(function (res, rej) {
		var rota = '/app/cp/' + window.btoa(sha(sha(key)));

		console.log(rota);

		var action = function action(valor) {
			// if ((b64.decode(res.responseText)) == (sha(sha(key))))
			if (sha(sha(key)) == window.atob(valor.responseText)) res(true);else rej(false);
		};

		request(rota, action, 'PUT');
	}).then(function (res) {
		return callback(res);
	}).catch(function (rej) {
		return callback(rej);
	});
};

validKey( //pull.get()
'sec', function (res) {

	console.log('res : ' + res);
}
// console.log('valid key : '+ validKey(pull.get()))
// console.log(pull.get());

// pull.set(getKey())

);var sendRotesForServer = function sendRotesForServer(obj, rot, actionCallBack, met, key) {

	if (isKey(key)) {
		//if (validKey(key))
		console.log('1 #');
		obj = Token(obj)(key);
	} else {
		// key(getKey());
		obj = Token(obj)(key);
	}

	console.log(obj);

	rot = rot + '/' + obj;

	sendRequest(rot, actionCallBack, 'POST');
};

var responseServer = function responseServer(token) {
	return function (key) {
		return JSON.parse(window.atob( // JSON.parse
		decipher(token)(key)) //.data


		);
	};
};var valida = function valida() {

	var obj = {
		data: {
			name: text.value,
			pass: sha(valor.value)
		}
	};

	var rot = '/tests';

	// const action = x => console.log(responseServer(x.responseText)(key)); //render()
	var action = function action(send) {
		return render(JSON.stringify(responseServer(send.responseText)(pull.get())) //.data)); //render()
		//					 b64.decode(// JSON.parse
		// 			(decipher(x.responseText)(pool)))

		);
		// console.log(pull.get());
	};sendRotesForServer(obj, rot, action, 'POST', pull.get()

	// rot = '/tests'
	// console.log(b64.decode(decipher(obj)(key)));


	);
};

var get = function get() {

	var c = function c(x) {
		return render(JSON.stringify(x.responseText));
	};

	var rot = '/persona';

	request(rot, c, 'GET');
};

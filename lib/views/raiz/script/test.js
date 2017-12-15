console.log("BEGIN");
//
// var div = document.getElementById('as')
//
// 		 var text = document.getElementById('text')
//
// 		 var valor = document.getElementById('valor')
//
// var sessionlog = ''
// var key = ''
//
// const render = tex => {
// 	div.innerHTML = '<h1>'+tex+'</h1>'
// }
//
// const b64 = {
// 	encode : forge.util.encode64,
// 	decode : forge.util.decode64
// }
//
// const sha = value => forge.sha512.create().update(value)
// 															.digest().toHex()
//
// const createToken = payload => key => encode(payload, key)
//
// const Token = obj => key => {
// 	obj['date'] = new Date().getTime()
// 	obj['espd'] = new Date().getTime() + (60 * 1000)
// 	obj['valid'] = new Date().getTime()
// 	return createToken(obj)(key)
// }
//
// // const decipherToken = token => key => decode(token, key)
//
// decrifrar = token => key => decode(token, key)
//
// //// AJAX
// var XMLHttpFactories = [
// 		function () {return new XMLHttpRequest()},
// 		function () {return new ActiveXObject("Msxml2.XMLHTTP")},
// 		function () {return new ActiveXObject("Msxml3.XMLHTTP")},
// 		function () {return new ActiveXObject("Microsoft.XMLHTTP")}
// ];
//
// function createXMLHTTPObject() {
//     var xmlhttp = false;
//     for (var i=0;i<XMLHttpFactories.length;i++) {
//         try {
//             xmlhttp = XMLHttpFactories[i]();
//         }
//         catch (e) {
//             continue;
//         }
//         break;
//     }
//     return xmlhttp;
// }
//
// function sendRequest(url,callback,postData) {
//     var req = createXMLHTTPObject();
//     if (!req) { console.log('ERRO');return;};
//     var method = (postData) ? postData : "GET";
//     req.open(method,url,true);
//     req.setRequestHeader('User-Agent','XMLHTTP/1.0');
//     if (postData)
//     	req.setRequestHeader('Content-type','application/x-www-form-urlencoded');
//     req.onreadystatechange = function () {
//         if (req.readyState != 4) return;
//         if (req.status != 200 && req.status != 304) {
// //          alert('HTTP error ' + req.status);
// 						console.log('HTTP error ' + req.status);
//             return;
//         }
//         callback(req);
//     }
//     if (req.readyState == 4) return;
//     req.send(postData);
// }
//
// var request = function(url,callback,postData) {
// 	// console.log(isKey();
// 	if (isKey(key)) sendRequest(url,callback,postData)
// 	else {
// 		key = getKey(key)
// 		sendRequest(url,callback,postData)
// 	}
// }
//
// const isKey = key => !!key
//
// const getKey = () => {
// 	const keys = {
// 		priv : '', // interno secreto
// 		prvKey : '', // externos
// 		pubKey : '',
// 		session : ''
// 	}
//
// 	const Bits = 1024;
//
// 	const bistInternos = 512
//
// 	const genRandomKey = bits => forge.random.getBytes(bits)
//
// 	keys.priv = genRandomKey(bistInternos)
//
// 	const rsaKeys = keys => Bits => {
//
// 		keys.prvKey = cryptico.generateRSAKey(keys.priv, Bits)
// 		keys.pubKey = cryptico.publicKeyString(keys.prvKey)
// 	}
//
// 	rsaKeys(keys)(Bits)
//
// 	const encrypticon = (cipher, key) => {
// 		return new cryptico.encrypt(cipher, key)
// 	}
// 	const decrypticon = (crypt, key) => {
// 		return new cryptico.decrypt(crypt, key)
// 	}
//
//
//
// }
//
// getKey()
//
// var valida = () => {
//
//   var obj = {
// 		name: text.value,
// 		pass: sha(valor.value)
// 	}
//
// 	var jwt
//
//   if (isKey(key))
// 	 jwt = Token(obj)(key)
// 	else {
// 		key = getKey()
// 		jwt = Token(obj)(key)
// 	}
//
// 	const action = x => render(JSON.stringify
// 				(decrifrar(x.responseText)(key)))
//
// 	rot = '/tests/'+jwt
//
// 	request(rot,action,'POST')
// }
//
// var get = () => {
//
// 	const c = x => render(JSON.stringify(x.responseText))
//
// 	rot = '/persona'
//
// 	request(rot,c,'GET')
// }

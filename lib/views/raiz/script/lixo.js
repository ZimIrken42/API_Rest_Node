
			// const pull = (()=>{
			//
			// 	let pool = 'sec'
			//
			// 	const set = po => pool = po;
			// 	const get = () => pool
			//
			// 	return {
			// 		get: get,
			// 		set : set
			// 	}
			// })()
			//
			// // console.log (pull.set(42))
			// // console.log(pull.get());
			//
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
			// 	obj['time'] = new Date().getTime()
			// 	obj['espd'] = new Date().getTime() + (60 * 1000)
			// 	obj['valid'] = new Date().getTime()
			// 	return createToken(b64.encode(JSON.stringify(obj)))(key)
			// }
			//
			// // const decipherToken = token => key => decode(token, key)
			//
			// const decipher = token => key => decode(token, key)
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
			// 				return req
			//     }
			//     if (req.readyState == 4) return;
			//     req.send(postData);
			// 		return req
			// }
			//
			// var request = (url,callback,postData) =>
			// 		sendRequest(url,callback,postData)
			//
			// const validToken = token => key => {
			// 	try {
			//
			// 		token = decipher(token)(key)
			// 	} catch (e) {
			// 		/// console.log('ERROR '+e);
			// 		return false
			// 	} return true
			// }
			//
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
			// }
			//
			// const validKey = (key, callback) =>{
			//
			// 	new Promise ((res, rej) => {
			// 		const rota = '/app/cp/'+sha(sha(key))
			//
			// 		console.log(rota);
			//
			// 		const action = valor => {
			// 				if ((b64.decode(res.responseText)) == (sha(sha(key))))
			// 									res(true)
			// 				else
			// 					rej(false)
			// 		}
			//
			// 		request(rota, action,'PUT')
			// 	}).then(res => callback(res))
			// 	.catch(rej => callback(rej))
			// }
			//
			// validKey(pull.get(), res => console.log(res))
			// // console.log('valid key : '+ validKey(pull.get()))
			// // console.log(pull.get());
			//
			// // pull.set(getKey())
			//
			// const sendRotesForServer = (obj, rot, actionCallBack,
			// 												met, key) => {
			//
			// 	if (isKey(key))
			// 		//if (validKey(key))
			// 	 		obj = Token(obj)(key)
			// 	else {
			// 		key(getKey())
			// 		obj = Token(obj)(key)
			// 	}
			//
			// 	// console.log(obj);
			//
			// 	rot = rot + '/' + obj
			//
			// 	sendRequest(rot,actionCallBack,'POST')
			// }
			//
			// const responseServer = token => key => JSON.parse(b64.decode(// JSON.parse
			// 						(decipher(token)(key)))).data
			//
			//
      // var valida = () => {
			//
      //   var obj = {
			// 		data : {
			// 			name: text.value,
			// 			pass: sha(valor.value)
			// 		}
			// 	}
			//
			// 	let rot = '/tests'
			//
			// 	// const action = x => console.log(responseServer(x.responseText)(key)); //render()
			// 	const action = x => render(JSON.stringify
			// 		(responseServer(x.responseText)(pull.get())))//.data)); //render()
			// 	//					 b64.decode(// JSON.parse
			// 	// 			(decipher(x.responseText)(pool)))
			//
			// 	sendRotesForServer(obj,rot, action, 'POST', (pull.get()))
			//
			// 	// rot = '/tests'
			// 	// console.log(b64.decode(decipher(obj)(key)));
			//
			//
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



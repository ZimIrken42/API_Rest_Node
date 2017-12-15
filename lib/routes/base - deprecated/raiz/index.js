let config = require('../../../../config');

module.exports = (app) => {

	app.get("/", (req, res) => {

		const raiz = "/raiz"

		let page = (config.path.join(__dirname+"/"+config.view+raiz+"/index.html"))

		// let page = (config.path.join(__dirname+"/index.html\n"))

		// console.log(page)

		res.sendFile(page)

		// res.send(page)
	})

	return app
}

let config = require('../../../../config');

module.exports = (app) => {

	app.post("/contar", (req, res) => {

		const raiz = "/raiz"

		let page = ""+config.cont.show()

    // console.log(page)

		// let page = (config.path.join(__dirname+"/index.html\n"))

		res.send(page)

		// res.send(page)
	})
	app.get("/contar", (req, res) => {

		const raiz = "/raiz"

		let page = ""+config.cont.show()

    // console.log(page)

		// let page = (config.path.join(__dirname+"/index.html\n"))

		res.send(page)

		// res.send(page)
	})

	return app
}

let config = require('../../../../config');

module.exports = (app) => {

	const raiz = "/raiz"

	app.post("/join", (req, res) => {

  	config.join.add()

		let page = ""+config.join.show()

    // console.log(page)

		// let page = (config.path.join(__dirname+"/index.html\n"))

		res.send(page)

		// res.send(page)
	})
	app.get("/join", (req, res) => {

		let page = ""+config.join.show()

    // console.log(page)

		// let page = (config.path.join(__dirname+"/index.html\n"))

		res.send(page)

		// res.send(page)
	})

	return app
}

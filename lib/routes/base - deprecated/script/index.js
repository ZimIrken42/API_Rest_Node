const config = require("../../../../config")

module.exports = (app) => {

	app.get("/script/:id", (req, res) => {

    const raiz = "/raiz"

    const past = "/script"

		let page = (config.path.join(__dirname+"/"+config.view+raiz+past+"/"+req.params.id))

		res.sendFile(page)
		// res.send("Ok")
	})

	return app
}

const config = require("../../../../config")

module.exports = (app) => {

	app.get("/css/:id", (req, res) => {

    const raiz = "/raiz"

    const past = "/css"

		let page = (config.path.join(__dirname+"/"+config.view+raiz+past+"/"+req.params.id))

		res.sendFile(page)
		// res.send("Ok")
	})

	return app
}

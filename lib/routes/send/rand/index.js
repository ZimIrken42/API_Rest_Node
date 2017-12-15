let config = require('../../../../config');

module.exports = (app) => {

  app.post("/rand", (req, res) => {

    const raiz = "/raiz"

    let page = ""+config.rand(config.cont.show())

    // console.log(page)

    // let page = (config.path.join(__dirname+"/index.html\n"))

    res.send(page)

    // res.send(page)
  })
	app.get("/rand", (req, res) => {

		const raiz = "/raiz"

		let page = ""+config.rand(config.cont.show())

    // console.log(page)

		// let page = (config.path.join(__dirname+"/index.html\n"))

		res.send(page)

		// res.send(page)
	})
  app.get("/rand/:num", (req, res) => {

		const raiz = "/raiz"

		let page = ""+config.rand(req.params.num)

    // console.log(page)

		// let page = (config.path.join(__dirname+"/index.html\n"))

		res.send(page)

		// res.send(page)
	})

	return app
}

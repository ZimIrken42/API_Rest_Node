const config = require( "../../../../config" )

module.exports = ( app ) => {

	app.get ( "/persona/:id", ( req, res ) => {

		// config.obj[req.params.id] = req.params.value

		let page = {}
		// page[req.params.id] = req.params.value

    res.json ( page )

	} )

	app.get ( "/personaget/:id", ( req, res ) => {

		let page = {}
		page [ req.params.id ] = req.params.value

    res.json ( page )

	} )

  app.get ( "/persona", ( req, res ) => {

		let page = config.obj

		res.json ( page )
	} )

	app.get ( "/persona", ( req, res ) => {

		let page = config.obj = {}

		res.json ( page )
	} )

	return app
}

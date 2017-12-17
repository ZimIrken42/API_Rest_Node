const config = require( "../../../../config" )

module.exports = ( app ) => {

	app.post ( '/tests/:id', ( req, res, next ) => {

		const jwt = req.params.id

		page = jwt
		res.send ( page )
	} )
	app.get ( '/tests', ( req, res, next ) => {
		let page = 'isValid'

		res.send ( page )
	} )
	// app.all( '/tests', ( req, res, next ) => {
	//   // runs for all HTTP verbs first
	//   // think of it as route specific middleware!
	// 	res.status( 404 ).send( '' )
	// } );

	return app
}

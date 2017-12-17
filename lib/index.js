const express = require ( "express" )
const consign = require ( "consign" )
const bodyParser = require ( "body-parser" )
const config = require ( '../config' )
const helmet = require ( 'helmet' )

const app = express ()

// parse
app.use ( bodyParser.urlencoded ( { extended: false } ) )
app.use ( bodyParser.json () )

/// http secure
app.use ( helmet () )
// app.use ( helmet.contentSecurityPolicy ( { /// error conection ajax
// 	directives: {
// 		defaultSrc: ["'self'"],
// 		// styleSrc: ["'self'"],
// 		reportUri: '/report-violation',
// 		sandbox: ['allow-forms', 'allow-scripts']
// 	}
// } ) )
app.use ( helmet.frameguard ( { action: 'sameorigin' } ) )
app.use ( helmet.referrerPolicy ( { policy: 'same-origin' } ) )
app.use ( helmet.referrerPolicy ( { policy: 'unsafe-url' } ) )
app.use ( helmet.referrerPolicy () )
app.use ( helmet.xssFilter () )
app.use ( helmet.noCache () ) /// comment in production

app.use ( '/',express.static ( config.path.join ( __dirname+'/views/raiz' ) ) ) // sub raiz routes

consign ()
	.include ( "./lib/routes/send" )
	.into ( app )

module.exports = {

	app : app
}

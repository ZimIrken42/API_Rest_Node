const os = require ( 'os' )
const cluster = require ( 'express-cluster' )
const path = require ( "path" )
const timer = require ( './timer' )
const tools = require ( './tools' )
const obj = require ( './json' )

const uport = 3000
const cores = os.cpus () .length - 1
// const cores2 = ( ( cores - 1 ) >= 0 ) ? ( cores - 1 ) : 0
const view = "../../../views/"

const genRandomNumber = ( seed ) => Math.round ( Math.random () * seed )

timer.run ()
timer.start ()

module.exports = {
	/// tests
	obj : obj,
	randum: genRandomNumber,
	port : uport,
	/// tools
	// timer : timer, # deprecated
	path : path,
	cluster : cluster,
	tools : tools,
	//// tools core utils
	view : view,
	cores : cores
}

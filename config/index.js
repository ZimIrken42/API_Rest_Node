const os = require('os')
const cluster = require('express-cluster')
const path = require ("path")
const tools = require('./tools')

const uport = 3000
const cores = os.cpus().length-1
// const cores2 = ((cores - 1) >= 0) ? (cores - 1) : 0
const view = "../../../views/"

let pessoas = {}

const constrCont = tools.contr

const join = constrCont()

const conta = constrCont()

timer.core.insert(conta.add)

const rand = (arg) => Math.round (Math.random() * arg)

module.exports = {
	/// tests
	cont: conta,
	obj : pessoas,
	rand: rand,
	join : join,
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

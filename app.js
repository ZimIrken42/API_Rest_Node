const lib = require("./lib")
const config = require("./config")

config.cluster((worker) => {
lib.app.listen(config.port, () => {
	console.log("Up Server in "+config.port)
})
}, {count: (config.cores)})

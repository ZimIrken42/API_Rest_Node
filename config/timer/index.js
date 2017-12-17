const minutesTime = 14
const timeInMiliSecunds = minutesTime * 1000 * 60

const core = require ( './core' )

const main = core.main

main.begin()

let timer = setInterval ( main.begin, timeInMiliSecunds )

let stop = () => { clearInterval ( timer ) }

module.exports = {

  start : main.begin,
  stop : stop,
  core : main
}

const utime = 14
const time = utime * 1000 * 60

const core = require('./core')

const main = core.main

setInterval(main.begin, time)

module.exports = {

  start : main.begin,
  core : main
}

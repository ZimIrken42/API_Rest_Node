const mtime = 14
const time = mtime * 1000 * 60

const core = require('./core')

const main = core.main

let timer = setInterval(main.begin, time)

let stop = () => { clearInterval(timer) }

module.exports = {

  start : main.begin,
  stop : stop,
  core : main
}

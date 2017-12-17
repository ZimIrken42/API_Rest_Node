const allocatorOfFunctions = require ( './allocatorOfFunctions' )

let timerSet = setTimeout

let minutesTime = 14

const stop = () => clearTimeout ( timerSet )

const getTimeInMiliSecunds = () => minutesTime * 1000 * 60

const getTimer = () => timerSet

const startTimer = () => {

  return timerSet = setTimeout ( () => {

      allocatorOfFunctions.run
      startTimer ()
    }, getTimeInMiliSecunds () )
}

const setTimer = newTimer => timerSet = newTimer

const setTimeInMinutes = newMinutes => {

  minutesTime = newMinutes

  stop ( timerSet )

  timerSet = startTimer ()
}

module.exports = {

  run : allocatorOfFunctions.run,
  start : startTimer,
  stop : stop,
  core : allocatorOfFunctions
}

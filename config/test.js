const timer = require('./timer')

let A = "A"

const as = () => {
   console.log(A)
}

console.log(timer.main.show())

timer.main.insert(as)

console.log(timer.main.show())

const time = 5000

const reset = () => {
  setTimeout(reset, time)
  timer.main.reset()
  console.log(timer.main.show())
  timer.main.insert(as)
  console.log(timer.main.show())
  A = A + "A"
}

const reset1 = () => {


}

setTimeout(reset, time)

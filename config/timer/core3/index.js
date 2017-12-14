const main = (() => {

  let array = []

  let into = () => {

  }

  const callbacks = (_fun) => {

    if (!!_fun) {
      setTimeout (_fun, 1)
    }
  }
  const insert = (_fun) => {
    if (typeof _fun == 'function') {

      _fun.about = {

        del : false,
        pause : false
      }

      array.push(_fun)
    }
  }
  const search = (arg) => { // error -1 // retorna possicao
    return array.map((x) => x == arg).indexOf(true)
  }
  const remove = (flag) => {

    const is = search(flag)
    if (is > 0) array.splice(is,1)
    return (is > 0)
  }
  const reset = () => {
    return array = [array[0]]
  }
  const show = () => {
    return array
  }
  const main = () => {

    array.forEach((i) => {

      if (!!i.about){
        if (i.about.del) remove (i)
        else {
          if (!i.about.pause) {
            callbacks (i)
          }
        }
      } else {
        callbacks (i)
      }
    })
  }
  const exec = (_func, _args) => {

		if (typeof _func == 'function')
	    setTimeout(_func.bind(null, _args), 1);
  }

  insert(into)

	return {

		begin: main,
    exec : exec,
    insert : insert,
    search : search,
    remove : remove,
    reset : reset,
    show : show
	}
})()

module.exports = {
  main : main
}

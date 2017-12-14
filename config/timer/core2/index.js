const core = () => {

  const Facfun = () => {

    let continuar = false

    let del = false // delet variable

    let min = 1 /// val timer

    let  into = () => {};

    const time = () => min * 1000 * 60 // time min

    const begin = () => into();

    const insert = (_func) => { // not work, lost of referenc
      if (typeof _func === 'function' && !!_func) {
        return (into = _func)
      }
    }

    const setTime = (_min) => {
      if (_min > 0) {
        return min = _min
      }
    };

    const getTime = () => min;

    const getCon = () => continuar;

    const setCon = (_bool) => continuar = _bool;

    const getdel = () => del;

    const setdel = (_del) => del = _del;

    return {

      main : into,
      begin : begin,
      // insert : insert, // deprecated
      set : setTime,
      get : getTime,
      getCon : getCon,
      setCon : setCon,
      setdel : setdel,
      getdel : getdel

    }
  }

  let into = Facfun()

  let array = [into] // up date

  // array.push(into) // deprecated

  const insert = (_fun, times, _con) => {

    if (typeof _fun === 'function') {

      times = (times > 0) ? times : 1

      _con = !!_con

      // let fafunc = Facfun(_fun, times, _con)
      let fafunc = Facfun(_fun)

      fafunc.main = _fun

      fafunc.set(times)

      fafunc.setCon(_con)

      array.push(fafunc)

      // into = Facfun()

      return _fun
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
  const show = () => array;

  const main = () => {

    array.forEach((i) => {
      if (i.getdel()){
        remove(i)
      } else i.begin ()
    });
  }

  return {

    begin : main,
    insert : insert,
    search : search,
    remove : remove,
    reset : reset,
    show : show
  }
}

module.exports = {

  main : core
}

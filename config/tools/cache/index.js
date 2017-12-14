const cacheJSON = () => {

  const limit = 4;
  let view = [];

  const add = (flag , dataJSON) => { // data object JSON

    if ((!!!view.find((x) => x.name === flag)) && (!!dataJSON) &&
                (Object.keys(dataJSON).length > 0)) {
      if (view.length < limit) view.push({name: flag, data: dataJSON})
      return ((view.length - limit) > 0)
    } else return false
  }
  const search = (arg) => { // error -1 // retorna possição
    return view.map((x) => x.name == arg).indexOf(true)
  }
  const remove = (flag) => { // flag is String

    const is = search(flag)
    if (is > 0) view.splice(is,1)
    return (is > 0)
  }
  const reset = () => {
    return view = []
  }
  const show = () => {
    return view
  }

  return {
    add : add,
    remove : remove,
    search : search,
    reset : reset,
    show : show
  }
}; // fim cacheJSON


module.exports = {

  cache : cacheJSON
}

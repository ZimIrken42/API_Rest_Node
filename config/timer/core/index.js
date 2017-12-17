const main = ( () => {

  let array = []

  let into = () => {

  }

  array.push ( into )

	const main = () => {

		array.forEach ( (i) => {
      i()
		} );
	}

  const insert = ( fun ) => {
    if ( typeof fun === 'function' ) array.push( fun )
  }
  const search = ( arg ) => { // error -1 // retorna possicao
    return array.map( ( x ) => x == arg ).indexOf ( true )
  }
  const remove = ( flag ) => {

    const is = search ( flag )
    if ( is > 0 ) array.splice ( is, 1 )
    return ( is > 0 )
  }
  const reset = () => {
    return array = [ array [ 0 ] ]
  }
  const show = () => {
    return array
  }

	return {

		begin: main,
    insert : insert,
    search : search,
    remove : remove,
    reset : reset,
    show : show
	}
} )()

module.exports = {
  main : main
}

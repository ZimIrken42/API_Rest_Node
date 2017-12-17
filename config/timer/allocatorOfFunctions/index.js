const allocatorOfFunctions = ( () => {

  let listOfFunctions = new Array ()

  const initFunction = () => {}

  listOfFunctions.push ( initFunction )

	const runFunctions = () => listOfFunctions.forEach ( ( instantFunction ) => instantFunction () )

  const insertFunction = ( newFunction ) => {

    if ( typeof newFunction === 'function' )
      listOfFunctions.push ( newFunction )
  }

  const searchFunction = ( candidateFunction ) => {

    return listOfFunctions.map ( functionKnow => functionKnow == candidateFunction )
                                    .indexOf ( true )
  }
  const removeFunction = ( possitionOfFunction ) => {

    return ( possitionOfFunction > 0 ) ? listOfFunctions.splice ( possitionOfFunction, 1 ) : false
  }

  const resetList = () => listOfFunctions = [ listOfFunctions [ 0 ] ]

  const showFunctions = () => listOfFunctions

  return {

    run : runFunctions,
    insert : insertFunction,
    search : searchFunction,
    remove : removeFunction,
    reset : resetList,
    show : showFunctions
	}
} ) ()

module.exports = {

  run : allocatorOfFunctions.run,
  insert : allocatorOfFunctions.insert,
  search : allocatorOfFunctions.search,
  remove : allocatorOfFunctions.remove,
  reset : allocatorOfFunctions.reset,
  show : allocatorOfFunctions.show
}

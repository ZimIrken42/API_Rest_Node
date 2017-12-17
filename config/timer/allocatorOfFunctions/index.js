const allocatorOfFunctions = ( () => {

  let listOfFunctions = []

  const initFunction = () => {}

  listOfFunctions.push ( initFunction )

	const runFunctions = () => listOfFunctions.forEach ( ( instantFunction ) => instantFunction () )

  const insertFunction = ( newFunction ) => if ( typeof newFunction === 'function' )
                                              listOfFunctions.push ( newFunction )

  const searchFunction = ( candidateFunction ) => {
    return listOfFunctions.map ( functionKnow => functionKnow == candidateFunction )
                                    .indexOf ( true )
  }
  const removeFunction = ( possitionOfFunction ) => {

    if ( possitionOfFunction > 0 ) listOfFunctions.splice ( possitionOfFunction, 1 )
    return ( possitionOfFunction > 0 )
  }

  const resetList = () => return listOfFunctions = [ listOfFunctions [ 0 ] ]

  const showFunctions = () => return listOfFunctions

	return {

		begin : runFunctions,
    insert : insertFunction,
    search : searchFunction,
    remove : removeFunction,
    reset : resetList,
    show : showFunctions
	}
} ) ()

module.exports = {
  
  main : allocatorOfFunctions
}

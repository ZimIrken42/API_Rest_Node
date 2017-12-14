const constrCont = () => {

	let i = 0;

	const add = () => ++i

	const reset = () => i = 0

	const show = () => i

	return {

		add: add,
		reset: reset,
		show: show
	}
}


module.exports = {

  constrCont : constrCont
}

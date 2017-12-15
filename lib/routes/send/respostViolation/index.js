let config = require('../../../../config');

module.exports = (app) => {

	app.post('/report-violation', function (req, res) {
	  if (req.body) {
	    console.log('CSP Violation: ', req.body)
	  } else {
	    console.log('CSP Violation: No data received!')
	  }

	  res.status(204).end()
	})

	return app
}

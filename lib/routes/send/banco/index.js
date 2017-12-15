module.exports = (app) => {

  app.get('/banco', (req,res) => {

    let page= 'BANCO\n'

    res.send(page)
  })

  return app
}

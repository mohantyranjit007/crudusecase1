const routes = (app) => {
    app.route('/contact')
    .get((req, res,next) => {
        //middlewire
      console.log(`request ${req.originalUrl}`)
      console.log(`request ${req.method}`)

      next()
      
    },(req,res,next)=>{
        res.send('get request to the Successfull')
    })
    .post((req, res) => {
        res.send('post request to the Successfull')
      })
    app.route('/contact/:contactId')
    .put((req, res) => {
        res.send('put request to the Successfull')
      })
    .delete((req, res) => {
        res.send('delete request to the Successfull')
      })
}
export default routes;
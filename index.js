const express = require('express')
const app = express()
const cors = require('cors')
const bodyparser = require('body-parser')

app.use(cors());
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));


app.get('/',function(req,res){
    res.status(200).send({
        success: true,
        message: "Hello from index",
      });
})


const testRoute = require('./testRoute');
app.use('/test', testRoute);


const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log('Server Started on PORT ' + PORT)
})

module.exports = app
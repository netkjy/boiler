const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://mac:chlgPwls0808@cluster0.s7fwz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//    userNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify:false
useUnifiedTopology: true
}).then(()=> console.log("MongoDB Connected..."))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


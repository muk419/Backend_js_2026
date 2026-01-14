require('dotenv').config()
const express = require('express')
const app = express()
const PORT=process.env.PORT
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twiter',(req,res)=>{
res.json({msg: "aur Jayant kaisa hai"})
})
app.get('/login',(req,res)=>{
  res.json({login: "<h1>this is login data</h1>"})
})
  app.get('/youtube',(req,res)=>{
   res.send("this youtube")
})
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
 
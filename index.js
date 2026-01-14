const express = require('express')
const app = express()
const port = 4000

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
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 
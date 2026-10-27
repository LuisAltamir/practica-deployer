const express = require('express')
const app = express()
app.use(express.static('public'))
const PORT = process.env.PORT || 3000
const path = require ('path')


app.use(express.static(path.join(__dirname,'public')))

app.get('/api/saludo', (request, response) => {
  response.json({ message: 'Hola_LCAR' })
})

app.listen(PORT, () =>{
     console.log(`Servidor en puerto ${PORT}`)
})
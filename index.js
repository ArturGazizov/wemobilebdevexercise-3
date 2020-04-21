const express = require('express')
const app = express()



let notes = [
  {
    id: 1,
    content: 'Arto Hellas',
    number: '151017-12-10'
  },
  {
    id: 2,
    content: 'Martti Tienari',
    number: '242011-12-10'
  },

  {
    id: 3,
    content: 'Arto Järvinen',
    number: '332017-11-10'
  },
  {
    id: 4,
    content: 'Letvo Kutvonen',
    number: '422017-12-11'
  }
]


app.get('/api/persons', (req, res) => {
  res.json(notes)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
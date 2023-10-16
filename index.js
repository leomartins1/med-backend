const express = require('express')
const { 
    createUserController,
    getUserByIdController,
    getUsersController,
    toggleUserStatusController,
    deleteUserByIdController
     } = require('./src/controllers/users')

const app = express()

app.use(express.json())

app.post('/pessoas', createUserController)
app.get('/pessoas', getUsersController)
app.get('/pessoas/:id', getUserByIdController)
app.patch('/pessoas/:id', toggleUserStatusController)
app.delete('/pessoas/:id', deleteUserByIdController)

app.listen(4000, () => {
    console.log('Listen on 4000')
})

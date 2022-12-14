
// Funções
import { CreateUser, loginUser } from '../Controllers/userController.js';

// Auxiliares
import { Router } from 'express'

const server = Router()

server.post('/signup', CreateUser)
server.post('/signin', loginUser)

export default server;
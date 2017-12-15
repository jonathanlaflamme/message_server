import express from 'express'
import passport from 'passport'
import { User } from '../models'

var routerAuth = express.Router();

routerAuth.post('/login', (req, res) => {
    res.send('Tbd');
})

export default routerAuth
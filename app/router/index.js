import express from 'express'
import Auth from './auth'

var router = express.Router();

router.use('/auth', Auth)

export default router
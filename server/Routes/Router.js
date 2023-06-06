const express = require('express')
const router = express.Router()

const { viewBasicData, viewEducationsData, viewNameNumberData, viewIdData, viewEducationData, addBasicData, addEducationData } = require('../Controller/Control')

router.get('/view/all', viewBasicData)
router.get('/view/education', viewEducationsData)
router.post('/view/one', viewNameNumberData)
router.get('/view/one/:postId', viewIdData)
router.get('/view/bybasicid/:postId', viewEducationData)
router.post('/add/data', addBasicData)
router.post('/add/course/:postId', addEducationData)

module.exports = router
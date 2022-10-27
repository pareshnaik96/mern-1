const express = require("express")
const router = express.Router()
const studentController = require("../Controllers/studentController")



router.post('/register',studentController.createStudent)
router.get('/student',studentController.getStudent)
router.get('/student/:id',studentController.getStudentById)
router.put('/student/:id',studentController.updateStudent)
router.delete('/student/:id',studentController.deleteStudent)




module.exports = router
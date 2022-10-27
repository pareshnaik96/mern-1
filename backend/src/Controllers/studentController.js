const studentModel = require("../Models/studentModel")


const createStudent = async function(req,res){
    try{
       
        let data = req.body
        
        const {fname,lname,email,password} = data
        
        let uniqueEmail = await studentModel.findOne({ email });
        if (uniqueEmail){
              return res.status(400).send({ status: false, message: "email already exist" });
        }

        let student = await studentModel.create(data)
        return res.status(201).send({status:true,message:"student created successfully",data:student})


    }catch(error){
      return res.status(500).send({status:false,message:error.message})
    }
}

const getStudent = async function(req,res){

    try{
    //    let data = req.query

       const findStudent = await studentModel.find()

       if(findStudent && findStudent.length === 0)
          return res.status(404).send({status:false,message:"No such student found"})

       return res.status(200).send({status:true,message:"Student list access successfully",student:findStudent})

    }catch(error){
      return res.status(500).send({status:false,message:error.message})
    }
}

const getStudentById = async function(req,res){

    try{
       let studentId = req.params.id

       const findStudent = await studentModel.findById(studentId)

       if(!findStudent)
          return res.status(404).send({status:false,message:"No such student found"})

       return res.status(200).send({status:true,message:"Student access successfully",data:findStudent})

    }catch(error){
      return res.status(500).send({status:false,message:error.message})
    }
}

const updateStudent = async function(req,res){

    try{

       let studentId = req.params.id
       let data = req.body
       const {fname,lname,email,password} = data

       const findStudent = await studentModel.findById(studentId)

       if(!findStudent)
          return res.status(404).send({status:false,message:"No such student found"})

       const updateStudent = await studentModel.findOneAndUpdate({_id:studentId},{$set:{fname,lname,email,password,updatedAt: Date.now() }},{ new: true })
       return res.status(200).send({status:true,message:"Student access successfully",data:updateStudent})

    }catch(error){
      return res.status(500).send({status:false,message:error.message})
    }
}

const deleteStudent = async function (req, res) {
  try {
      let studentId = req.params.id;

      let studentData = await studentModel.findByIdAndRemove({ _id: studentId, isDeleted: false });

      if (!studentData) {
       return res.status(404).send({ status: false, message: "Student Not found" });
      }
     
      return res.status(200).send({ status: true, message:"Student deleted successfull" })

  }
  catch (error) {
      console.log(error.message)
      return res.status(500).send({ status: false, msg: "Error", error: error.message })
  }
}

// const deleteStudent = async function (req, res) {
//    try {
//        let studentId = req.params.id;

//        let studentData = await studentModel.findOne({ _id: studentId, isDeleted: false });

//       if (!studentData) {
//           return res.status(404).send({ status: false, message: "Student Not found" });
//       }

//       await studentModel.findOneAndUpdate(
//            { _id:studentId, isDeleted: false }, { $set: { isDeleted: true, deletedAt: new Date() } }, { new: true })

//       return res.status(200).send({ status: true, message:"Student deleted successfull" })

//    }
//    catch (error) {
//        console.log(error.message)
//        return res.status(500).send({ status: false, msg: "Error", error: error.message })
//    }
// }




module.exports.createStudent = createStudent
module.exports.getStudent = getStudent
module.exports.getStudentById = getStudentById
module.exports.updateStudent = updateStudent
module.exports.deleteStudent = deleteStudent

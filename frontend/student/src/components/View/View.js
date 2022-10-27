import React,{useState,useEffect}from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const View = () => {

    const[student,setStudent] = useState([])

    const loadStudent = async()=>{
        const result =  await axios.get("http://localhost:4000/student")
       setStudent(result.data.student)
    }
    
    useEffect(()=>{
        loadStudent();

    },[])


    const deleteStudent = async(id)=>{
        await axios.delete("http://localhost:4000/student/"+id)
        .then(()=>{
            alert("deleted successfull")
            loadStudent()
         })
         .catch((err)=>{
            alert("Could Not delete")
         })
    }


  return (
        <div className='container-forms'>
        <div className='row'>
            <div className='col-md-12 text-center'><h2>Student List</h2></div>
        </div>
        
        <table className='table'>
            <thead className='head'>
                <th>Sr. No.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            <tbody>
                {student.map((student,index)=>(
                <tr>
                    <td>{index+1}</td>
                    <td>{student.fname}</td>
                    <td>{student.lname}</td>
                    <td>{student.email}</td>
                    <td><Link to={`edit/${student._id}`}>
                        <button className='btn btn-edit'>Edit</button>
                        </Link></td>
                    <td>
                       <button className='btn btn-delete'onClick={()=>deleteStudent(student._id)}>Delete</button>
                    </td>
                </tr>
               ))}
            </tbody>
        </table>
    </div>
  )
}

export default View

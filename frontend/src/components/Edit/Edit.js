import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const Edit = () => {

       const {id} = useParams(); 

        const[student,setStudent] = useState((
            {
                "fname":"",
                "lname":"",
                "email":"",
                "password":"",
            }
        ))

        const {fname,lname,email,password}= student;

        useEffect(()=>{
            loadStudent();

        },[])
        
        const loadStudent = async()=>{
            const result =  await axios.get('http://localhost:4000/student/'+id)
        setStudent(result.data)
        }


        const handleChange = ((e)=>{
            setStudent({
                ...student,
                [e.target.name]:e.target.value})
        })
    
        const handleSubmit = async(e)=>{
            e.preventDefault()
            await axios.put('http://localhost:4000/student/'+id,student)
            .then((result)=>{
                alert("Updated successfull")
            })
            .catch((err)=>{
                alert("error")
            })
        }

  return (
    <div className='container form'>
    <form onSubmit={e=>handleSubmit(e)}>
    <div className='row'>
        <div className='col-md-12 text-center'><h3>Edit Student</h3></div>
    </div>
    <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-4'>First Name</div>
        <div className='col-md-4'><input type="text" className="form-control" name="fname" value={fname} onChange={e=>handleChange(e)}/></div>
        <div className='col-md-2'></div>
    </div>
    <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-4'>Last Name</div>
        <div className='col-md-4'><input type="text" className="form-control" name="lname" value={lname} onChange={e=>handleChange(e)}/></div>
        <div className='col-md-2'></div>
    </div>
    <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-4'>Email Address</div>
        <div className='col-md-4'><input type="text" className="form-control" name="email" value={email} onChange={e=>handleChange(e)}/></div>
        <div className='col-md-2'></div>
    </div>
    <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-4'>Password</div>
        <div className='col-md-4'><input type="password" className="form-control" name="password" value={password} onChange={e=>handleChange(e)}/></div>
        <div className='col-md-2'></div>
    </div>


    <div className='row'>
    <div className='col-md-2'></div>
        <div className='col-md-8'>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        <div className='col-md-2'></div>
    </div>
    </form>
</div>
  )
}

export default Edit

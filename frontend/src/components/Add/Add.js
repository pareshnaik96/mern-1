import React, { useState } from 'react'
import axios from 'axios';

const Add = () => {

    const[student,setStudent] = useState((
        {
            "fname":"",
            "lname":"",
            "email":"",
            "password":"",
        }
    ))

    const {fname,lname,email,password}= student;

    const handleChange = ((e)=>{
        setStudent({
            ...student,
            [e.target.name]:e.target.value})
    })
    
    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(!fname || !lname || !email || !password){
            alert("please enter required fields")
        }else{
        await axios.post("http://localhost:4000/register",student)
            .then((result)=>{
                console.log(result)
                alert("Register successfull")
            }).catch((err)=>{
                alert("Error")
            })
        }
    }
   return (
        <div className='container form'>
        <form onSubmit={handleSubmit}>
        <div className='row'>
            <div className='col-md-12 text-center'><h3>Add Student</h3></div>
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

export default Add

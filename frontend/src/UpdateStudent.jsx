import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function CreateStudent() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault();
        axios.put("http://localhost:3000/update/"+id, {name,email})
        .then( res => {
            console.log(res)
            navigate('/')
        })
        .catch( err => console.log(err,"Error in sending Data"))
    }
  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center '>
        <div className='w-50 bg-light rounded p-3 '>
            <form onSubmit={handleSubmit}>
                <h2>Update Student</h2>
            <div className="mb-2">
                <label >Name</label>
                <input type="text" placeholder='Enter Name' className='form-control' onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label >Email</label>
                <input type="email" placeholder='Enter Email' className='form-control' onChange={(e) => setEmail((e.target.value))}/>
            </div>
            <button className="btn btn-info">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateStudent
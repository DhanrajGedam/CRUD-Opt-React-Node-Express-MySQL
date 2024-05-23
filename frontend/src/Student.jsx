import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Student() {
    const [student, setStudent] = useState([]);
    
    useEffect(()=>{
        axios.get("http://localhost:3000/")
        .then( res => setStudent(res.data))
        .catch( err => console.log(err, "Error in gettting Data"))
    },[])

    const handleDelete = async (id) =>{
        try{
            await axios.delete("http://localhost:3000/deleteStudent/"+id)
            .then( res => console.log(res))
            window.location.reload()
        }catch{
            err => console.log(err)
        }
    }

  return (
    <div className='d-flex bg-secondary justify-content-center align-items-center vh-100 '>
      <div className="w-50 bg-light justtify-content-center align-items-center p-3 rounded-3">
        <h2>Student </h2>
        <Link to="/create" className='btn btn-info mb-3'>Add</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Aciton</th>
                </tr>
            </thead>
            <tbody>
                {
                    student.map( (data,i)=>(
                        <tr key={i}>
                            <td>{data.Name}</td>
                            <td>{data.Email}</td>
                            <td>
                                <Link to={`update/${data.ID}`} className='btn btn-success mx-2'  >Update</Link>
                                <button className='btn btn-danger' type='button' onClick={() => handleDelete(data.ID)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Student
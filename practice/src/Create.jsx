import React, { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from './UserReducer'
import { useNavigate } from 'react-router-dom'
const Create = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitHandle = (e) => {
        e.preventDefault()
        if (!name || !email) {
            alert('Fill the Input field');
        } else {
            const newUserId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
            // const newUserId = 1
            dispatch(addUser({ id: newUserId, name, email }));
            navigate('/');
        }
    }
    return (
        <div className=' d-flex  w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary p-4 text-white' >
                <h3>Add New User:</h3>

                <form onSubmit={submitHandle}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" className='form-control' placeholder='Enter name'
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" className='form-control ' placeholder='Enter email'
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button className='btn btn-info mt-4 text-white'> Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Create
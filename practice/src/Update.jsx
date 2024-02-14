import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from './UserReducer'
import { useNavigate, useParams } from 'react-router-dom'


const Update = () => {
    const { id } = useParams()
    const users = useSelector((state) => state.users)
    const existingUser = users.filter((e) => e.id == id)
    const { name, email } = existingUser[0]
    const [updateName, setupdateName] = useState(name)
    const [updateEmail, setupdateEmail] = useState(email)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(updateUser({
            id: id,
            name: updateName,
            email: updateEmail
        }))
        navigate("/")
    }

    return (
        <div className=' d-flex  w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary p-4 text-white' >
                <h3>Update User:</h3>

                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" className='form-control' placeholder='Enter name'
                            value={updateName} onChange={(e) => setupdateName(e.target.value)} />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" className='form-control ' placeholder='Enter email'
                            value={updateEmail} onChange={(e) => setupdateEmail(e.target.value)} />
                    </div>
                    <button className='btn btn-info mt-4 text-white'> Update</button>
                </form>

            </div>
        </div>
    )
}

export default Update
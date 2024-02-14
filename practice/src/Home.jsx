import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from './UserReducer'

const Home = () => {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const deleteHandle = (id) => {
        dispatch(deleteUser({ id: id }))
    }
    console.log(users);
    return (
        <div className='container'>
            <h2>Todo App</h2>
            <Link to="/create" className='btn btn-success my-3'> Create</Link>
            <table className='table border'>
                <thead>
                    <tr>
                        {/* <th>ID:</th> */}
                        <th>Name:</th>
                        <th>Email:</th>
                        <th>Action:</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            {/* <td>{user.id}</td> */}
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/update/${user.id}`} className='btn btn-sm btn-primary mx-1'>Edit</Link>
                                <button onClick={() => deleteHandle(user.id)} className='btn btn-sm btn-danger mx-1' >Delete</button>
                            </td>
                        </tr>
                    ))

                    }
                </tbody>

            </table>

        </div>
    )
}

export default Home
import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";
const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload
            const updateUser = state.find((users) => users.id == id)
            if (updateUser) {
                updateUser.name = name,
                    updateUser.email = email
            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload
            const updateUser = state.find((users) => users.id == id)
            if (updateUser) {
                return state.filter((f) => f.id !== id)
            }
        }
    }
})
export const { addUser, updateUser, deleteUser } = userSlice.actions
export default userSlice.reducer
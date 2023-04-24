import axios from "axios"
import { useState } from "react"
import alertUpdate from "../utils/alertOpenFormUpdate"

const useUserCrud = () =>{

    const [users, setUsers] = useState()

    const urlUsers = `https://users-crud.academlo.tech/users/`
    
    const getAllUsers = () => {
        axios.get(urlUsers)
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
    }

    const createNewUser = data => {
        axios.post(urlUsers, data)
        .then(() => getAllUsers())
        .catch(err => console.log(err))
    }

    const deleteUserById = id => {
        const urlDelete = `${urlUsers}${id}/`
        axios.delete(urlDelete)
        .then(() => getAllUsers())
        .catch(err => console.log(err))
    }

    const updateUserById = (id, data) => {
        const urlUpdate = `${urlUsers}${id}/`
        axios.put(urlUpdate, data)
        .then(() => {
            getAllUsers()
        })
        .catch(err => console.log(err))
    }

    return {
        users,
        getAllUsers,
        createNewUser,
        deleteUserById,
        updateUserById
    }
}

export default useUserCrud
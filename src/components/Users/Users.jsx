import React from 'react'
import {usersAPI} from "../../api/api";

const Users = () => {
    usersAPI.getUsers().then(data => {
        return data
    })
    return (<div>
        USERS
    </div>)
}

export default Users
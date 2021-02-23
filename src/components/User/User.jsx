import React from 'react'
import {usersAPI} from "../../api/api";

const User = () => {
    usersAPI.getUsers().then(data => {
        return data
    })
    return (<div>
        USERS
    </div>)
}

export default User
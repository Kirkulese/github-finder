import React from 'react'
import Useritem from './Useritem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'


const Users = ({ users, loading }) => {
    if(loading){
        return <Spinner />
    }
    else{
        return (
            <div style={userStyle}>
                {users.map(user =>(
                    //takes in props with user={user}
                    <Useritem key={user.id} user={user} />
                ))}
                
            </div>
        )
    }
}

Users.propTyps = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 33%)',
    gridGap: '1rem'
}

export default Users

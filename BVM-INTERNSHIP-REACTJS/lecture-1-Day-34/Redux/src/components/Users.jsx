import React from 'react'
import {useSelector} from 'react-redux'
const Users = () => {
    const users = useSelector((state)=> state.Test.users);
    console.log(users);
    
  return (
    <div>
      <h4>Users</h4>
            {users &&
                users.map((item,index)=>(
                    <div key={index}>
                        <h4>{item.name}</h4>
                        <p>Phone {item.phone}</p> Website <p>{item.website}</p>
                    </div>
                ))
             }
    </div>
  );
}

export default Users
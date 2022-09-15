import React from 'react'

const Users = ({users,loading,query}) => {
    if(loading){
        return <h2>Loading.....</h2>
    }
  return <>
   <ul className='list-group mb-4'>
   {users.filter((user)=>
   user.name.toLowerCase().includes(query)
   ).map((ele)=>{
    return <li className='list-group-item' key={ele.id}>
           {ele.name}
    </li>
   })}
   </ul>
  </>
}

export default Users
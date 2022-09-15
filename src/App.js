import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Users from './Components/Users'
import Pagination from './Components/Pagination'
function App() {
  const [users,setUsers]=useState([]);
  const [loading,setLoading]=useState(false);
  const [currentpage,setCurrentPage]=useState(1);
  const [usersPerPage]=useState(5);
  const [inputValue,setInputValue]=useState("");
  useEffect(()=>{
      const fetchUsers=async()=>{
        setLoading(true);
        const res= await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(res.data);
        setLoading(false);
      }
      fetchUsers();
  },[]);
  const indexOfLastuser=currentpage*usersPerPage;
  const indexOfFirstUser=indexOfLastuser-usersPerPage;
  const currentUSers=users.slice(indexOfFirstUser,indexOfLastuser);
  const paginate=(pagenumber)=>{
        setCurrentPage(pagenumber);
  }

  return (
    <div className="container mt-5">
      <h1 className='test-primary mb-3' >List Of Users</h1>
     <div>
      <input type="text" 
      placeholder='search user by name'
      value={inputValue}
      onChange={(e)=>setInputValue(e.target.value)}
      />
     </div>
    <Users users={currentUSers} loading={loading} query={inputValue} />
    <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} />
    </div>
  );
}

export default App;

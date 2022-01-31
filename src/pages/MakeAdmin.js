import React from 'react';
import { useState } from 'react';

const MakeAdmin = () => {
  const [email, setEmail] = useState('')
  const handleOnBlur = e =>{
    e.setEmail(e.target.value)
  }
  const handleAdminSubmit = e=>{
    const user ={email};
    fetch('http://localhost:5000/users/',{
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
      console.log();
    })
    e.preventDefault()
  }
  return (
    <div>
      <h2>Make an Admin</h2>
      <form onSubmit={handleAdminSubmit}>
      <h3>Email<input type="Email" onBlur={handleOnBlur} class="email" /></h3>
     
  <button type="submit" className="btn-primary">Make Admin</button>
      </form>
    </div>
  );
};

export default MakeAdmin;
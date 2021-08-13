import './newuser.css';

import React from 'react'

function NewUser() {
  return (
    <div className='newUser'>
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Username" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="First and Last Name" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="Phone number" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Enter your address" />
        </div>
      </form>
    </div>
  )
}

export default NewUser

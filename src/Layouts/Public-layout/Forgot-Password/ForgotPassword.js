import React from 'react'
import './Forgot-Password.css';
import { Link } from 'react-router-dom';
function ForgotPassword() {
  return (
    <div className='forgot-password'>
      <div className='fogot m-4' >
        <h2 className='text-center'>Reset Passsword</h2>
        <div>
          <div className='mt-3'>
            <input type='text' placeholder='Enter your email' />
          </div>
          <div className='mt-3 text-end'>
            <span>You have a account?</span><Link to="/login">Login</Link>
          </div>
        </div>
        <div className='text-end mt-3'>
          <button className='forgot-btns'>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
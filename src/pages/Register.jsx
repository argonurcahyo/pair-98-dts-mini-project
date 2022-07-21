import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../apis/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
 const navigate = useNavigate();
 const [errorMessage, setErrorMessage] = useState('')
 const [loading, setLoading] = useState(false)

 const handleSubmit = async (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const email = data.get('email')
  const password = data.get('password')

  try {
   setLoading(true)
   // eslint-disable-next-line no-unused-vars
   const { user } = await createUserWithEmailAndPassword(auth, email, password)
   navigate('/')
  } catch (error) {
   setLoading(false)
   setErrorMessage(error.message)
  }
 }
 return (
  <div className='login'>
   <div className='register-pic'></div>
   <div className='login-wrapper'>
    <form onSubmit={handleSubmit}>
     <div className='login-form'>
      <div className="input-wrapper">
       <input type="email" name="email" id="email" placeholder='Email' />
      </div>
      <div className="input-wrapper">
       <input type="password" name="password" id="password" placeholder='Password' />
      </div>
      <button className='btn-form' type='submit'>
       {loading ? <>Registering... <FontAwesomeIcon className='spinner' icon={faSpinner} /></> : "Register"}
      </button>
      <div className='register-text'>
       Already have an account? <Link to="/login">Login here!</Link>
      </div>
      <div className='error-message'>
       {errorMessage}
      </div>
     </div>
    </form>
   </div>
  </div>
 )
}

export default Register
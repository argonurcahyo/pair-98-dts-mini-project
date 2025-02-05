import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../apis/firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
 const navigate = useNavigate()
 const [errorMessage, setErrorMessage] = useState('')
 const [loading, setLoading] = useState(false);

 const handleSubmit = async (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget)
  const email = data.get('email')
  const password = data.get('password')

  try {
   setLoading(true)
   await signInWithEmailAndPassword(auth, email, password)
   navigate("/")
  } catch (error) {
   setLoading(false)
   setErrorMessage(error.message)
  }
 }

 return (
  <div className='login'>
   <div className='login-pic'>

   </div>
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
       {loading ? <>Signing in  <FontAwesomeIcon className='spinner' icon={faSpinner} /></> : <>Login </>}
      </button>
      <div className='register-text'>
       Don't have account yet? <Link to="/register">Register now!</Link>
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

export default Login
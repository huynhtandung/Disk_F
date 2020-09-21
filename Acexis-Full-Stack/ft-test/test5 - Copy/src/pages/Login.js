import React from 'react'

const Login = (props) => {
  return (
    <div>
      {/* 
      TODO: Your login page implementation
      */}
      <form>
        <input data-test='login__pwd' type='password' />
        <button data-test='login__submit' type='submit'>login</button>
      </form>
    </div>
  )
}

export default Login
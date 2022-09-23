import React from 'react'
import "./login.css"
const Login = () => {
  return (
    <form className='loginContainer'>
      <p className='loginTitle'>Giriş</p>
      <div className="loginInput">
        <label htmlFor="">E-    mail</label>
        <input type="text" name="" id="" />
      </div>
      <div className="loginInput">
        <label htmlFor="">Şifrə </label>
        <input type="text" name="" id="" />
      </div>
      <button>Daxil ol</button>
      <a href="#" className='forgetPwd'>Şifrəmi Unutdum</a>
      <a href="#" className='register'>Qeydiyyatdan keç</a>
    </form>
  )
}

export default Login
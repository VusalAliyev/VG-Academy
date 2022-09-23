import React from 'react'
import "../loginSign/signup.css"

const Signup = () => {
  return (
    <form className='loginContainer'>
    <p className='loginTitle'>Qeydiyyat</p>
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

export default Signup
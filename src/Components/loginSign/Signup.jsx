import React from 'react'
import "../loginSign/signup.css"

const Signup = () => {
  return (
    <form className='signupContainer'>
    <p className='signupTitle'>Qeydiyyat</p>
    <div className="signupInput">
      <label htmlFor="">E-mail</label>
      <input type="text" name="" id="" />
    </div>
    <div className="signupInput">
      <label htmlFor="">Şifrə </label>
      <input type="text" name="" id="" />
    </div>
    <div className="signupInput">
      <label htmlFor="">Şifrəni təsdiq et </label>
      <input type="text" name="" id="" />
    </div>
    <button className='confirmBtn'>Tamamla</button>
  </form>
  )
}

export default Signup
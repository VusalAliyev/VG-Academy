import React from 'react'
import "../Home/home.css"
const Home = () => {
  return (
    <div className='home-container'>
        <div className="home-left">
          <div className="home-top">
           <p>Sənin akademiyan !</p> 
          </div>
           <div className="home-bottom">
            <div className="home-bottom-paragraph">
           <p>VG Academy İT,SMM, Qrafik dizayn   dərsləri ilə qarşınızda</p> 
            </div>
            <div className="home-bottom-button">
            <a className="button-text" href="#"><button>Ətraflı</button></a>
            </div>
           </div>
        </div>
        <div className="home-right">
          <img src={require("../Images/home-emoji.png")} alt="" />
        </div>
    </div>
  )
}
export default Home
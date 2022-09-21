import React from 'react'
import "../ItPage/itPage.css"
const ItPage = () => {
  return (
    <div className='itContainer'>
      <div className="itContainer1">
        <div className="it1Left">
          <div className="it1LeftParagraph">
          <p>IT kursumuz</p>
          <p>Burada siz nələr öyrənəcəksiniz:</p>
          </div>
          <img src={require('../Images/it-emoji1.png')} alt="" srcset="" /> 
        </div>
        <div className="it2Left"></div>
      </div>
      <div className="itContainer2"></div>
    </div>
  )
}

export default ItPage
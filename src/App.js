import React from 'react'
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Courses from "./Components/Courses/Courses"
import "../src/app.css"

const App = () => {
  return (
    <div>
       <Header/>
       <Home/>
       <div className='appCourses'>
       <Courses cardTitle="IT" cardDesc="Müddət: 1 il "    />
       <Courses cardTitle="Qrafik Dizayn" cardDesc="Müddət: 5 ay"   />
       <Courses cardTitle="SMM" cardDesc="Müddət: 1 il" />
       </div>
    </div>
  )
}

export default App
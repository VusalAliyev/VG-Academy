import React from 'react'
import "../Courses/courses.css"

const Courses = (props) => {
    return (
        <div className='courses-container'>
            <div className="course-container">
                <div className="course-top">
                <img src={require('../Images/course1.png')} alt="" srcset="" />
                </div>
                <div className="course-bottom">
                    <div className="course-title">
                    <p> {props.cardTitle} </p>
                    </div>
                    <div className="course-desc">
                        <p>{props.cardDesc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses
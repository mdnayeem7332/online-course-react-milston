import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import './Course.css';

const Course = (props) => {
    // console.log(props.course)
    const {name,title,price,duration,image}=props.course

    return (
        <div className="courses">

            <div className="course-img">
                <img src={image} alt=""/>
            </div>

            <div className='course-detail'>
                <h2>Course Name : {name}</h2>
                <h3>Title : {title}</h3>
                <p>Price : <b>{price}</b></p>
                <p>Duration : {duration}</p>
                <button onClick={()=>props.handleAddCart(props.course)}> <FontAwesomeIcon icon={faPlusSquare}/> ENROL NOW</button>
            </div>
            
        </div>
            
    );
};

export default Course;
import React, { useState } from 'react';
import fakeData from '../../fakeData/CourseDetail'
import Course from '../Course/Course';
import './AllCourses.css'
import Cart from '../Cart/Cart';

const Courses = () => {
    const [courses,setCourses]=useState(fakeData)

    const [cart,setCart]=useState([])


    const handleAddCart = (course) => {
    const newCart = [...cart, course]
        setCart(newCart)
            
    }

    return (
        <div className='content'>
            <div className='main-content'>
                {
                    courses.map(course => <Course course={course} handleAddCart={handleAddCart}></Course>)
                }
            </div>
            <div className="cart">
                <Cart cart ={cart}></Cart>
            </div>
        </div>
        
    );
};

export default Courses;
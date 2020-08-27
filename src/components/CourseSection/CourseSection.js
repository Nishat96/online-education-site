import React from 'react';
import fakeData from '../../fakeData'; 
import { useState } from 'react';
import './CourseSection.css';
import CourseInfo from '../CourseInfo/CourseInfo';
import Cart from '../Cart/Cart';

const CourseSection = () => {
    const first15 = fakeData.slice(0, 15);
    const [course, setCourse] = useState(first15);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (courseInfo) =>{
        const newCart = [...cart, courseInfo];
        setCart(newCart);
    }

    return (
        <div className="CourseSection-container">
            <div className="courseInfo-container">
                {
                    course.map(csInfo => <CourseInfo 
                        handleAddCourse = {handleAddCourse}
                        courseInfo={csInfo}
                    ></CourseInfo>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default CourseSection;
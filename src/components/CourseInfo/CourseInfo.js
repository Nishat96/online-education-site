import React from 'react';
import './CourseInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


const CourseInfo = (props) => {
    // console.log(props.courseInfo);
    const {title, instructor, price} = props.courseInfo;
    return (
        <div >
            <div className="allCourse">
                <h3 className="title-name">{title}</h3>
                <p>Bestseller</p>
                <h5>by <span id="author"> {instructor}</span> </h5>
                <h4>Price: ${price}</h4>
                <button className="cart-btn"
                onClick = {() => props.handleAddCourse(props.courseInfo)}
                    
                > 
                <FontAwesomeIcon icon={faCartPlus} /> <strong>Enroll now</strong>
                </button>
            </div>
          
        </div>
    );
};

export default CourseInfo;
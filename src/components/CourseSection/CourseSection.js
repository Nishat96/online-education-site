import React from 'react';
import fakeData from '../../fakeData'; 
import { useState } from 'react';

const CourseSection = () => {
    const first15 = fakeData.slice(0, 15);
    const [course, setCourse] = useState(first15);

    return (
        <div>
            <h2>This is Course Section</h2>
            <h4>{course.length}</h4>
            <ul>
                {
                    course.map(courseInfo => <li>{courseInfo.title}</li>)
                }
            </ul>
        </div>
    );
};

export default CourseSection;
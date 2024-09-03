import React, { useRef } from 'react';
import CourseCard from './CourseCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 
import timage from '../components/assets/images/c1.jpg';
import bimage from '../components/assets/images/c2.jpg';
import dimage from '../components/assets/images/c3.jpg';
import fimage from '../components/assets/images/c4.jpg';

const courses = [
    {
        category: 'Technology',
        students: 12,
        lessons: 8,
        title: 'The Complete Android Java Developer Course',
        instructor: 'meronn',
        price: '55.00',
        discount: '75.00',
        image: timage,
    },
    {
        category: 'Business',
        students: 6,
        lessons: 6,
        title: 'The Complete Android Development Course',
        instructor: 'Mekonnen',
        price: '39.00',
        image: bimage,
    },
    {
        category: 'Development',
        students: 6,
        lessons: 6,
        title: 'The Complete WordPress Plugin Development Course',
        instructor: 'Yosef',
        price: '120.00',
        image: dimage,
    },
    
    {
      category: 'Finance',
      students: 9,
      lessons: 5,
      title: 'The Complete React Native Course',
      instructor: 'Abebe',
      price: 'Free',
      image: fimage,
  },
  {
    category: 'Finance',
    students: 9,
    lessons: 5,
    title: 'The Complete React Native Course',
    instructor: 'Abebe',
    price: 'Free',
    image: fimage,
 },
 {
    category: 'Finance',
    students: 9,
    lessons: 5,
    title: 'The Complete React Native Course',
    instructor: 'Abebe',
    price: 'Free',
    image: fimage,
},
];

const Courses = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <section style={{ padding: '40px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
                <h2 className="text-4xl font-semibold mb-4 text-center bg-gradient-to-r from-purple-700 via-blue-800 to-red-700 bg-clip-text text-transparent"style={{ fontSize: '2rem', fontWeight: '600', textAlign: 'center', marginBottom: '32px' }}>
                    You May Also Like More Courses
                </h2>
                <p style={{ textAlign: 'center', marginBottom: '40px' }}>
                    Take the next step toward achieving your personal and professional aspirations with SkillsHub.
                </p>

                {/* Scrollable container */}
                <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                    <button onClick={scrollLeft} style={arrowStyle}>
                      <FaArrowLeft/> {/* Left Arrow */}
                    </button>

                    <div
                        ref={scrollRef}
                        style={{
                            display: 'flex',
                            overflowX: 'auto',
                            scrollBehavior: 'smooth',
                            gap: '32px',
                            padding: '16px 0',
                            width: '100%',
                        }}
                    >
                        {courses.map((course, index) => (
                            <CourseCard key={index} course={course} />
                        ))}
                    </div>

                    <button onClick={scrollRight} style={arrowStyle}>
                      <FaArrowRight/> {/* Right Arrow */}
                    </button>
                </div>
            </div>
        </section>
    );
};

// Arrow button styles
const arrowStyle = {
    background: 'transparent',
    border: 'none',
    fontSize: '2rem',
    cursor: 'pointer',
    zIndex: 1,
    top: '50%',
    transform: 'translateY(-50%)',
    padding: '0 20px',
    color: 'blue',
};

export default Courses;
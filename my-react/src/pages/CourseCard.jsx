import React from 'react';

const CourseCard = ({ course }) => {
    const handleClick = () => {
        // Handle card click, e.g., navigate to course details page
        console.log(`Clicked on course: ${course.title}`);
    };

    return (
        <div 
            onClick={handleClick} 
            style={{ 
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s', 
                backgroundColor: 'white', 
                padding: '16px', 
                borderRadius: '8px', 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                textAlign: 'center'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
        >
            <img 
                src={course.image} 
                alt={course.title} 
                style={{ 
                    width: '100%', 
                    height: '160px', 
                    objectFit: 'cover', 
                    borderTopLeftRadius: '8px', 
                    borderTopRightRadius: '8px' 
                }} 
            />
            <div style={{ padding: '16px' }}>
                <span style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', fontWeight: '600' }}>
                    {course.category}
                </span>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '8px' }}>
                    {course.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    By {course.instructor}
                </p>
                <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                        {course.students} Students
                    </span>
                    <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                        {course.lessons} Lessons
                    </span>
                </div>
                <div style={{ marginTop: '16px' }}>
                    <span style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#2563eb' }}>
                        ${course.price}
                    </span>
                    {course.discount && (
                        <span style={{ marginLeft: '8px', textDecoration: 'line-through', color: '#6b7280' }}>
                            ${course.discount}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CourseCard;

import React, { useState } from 'react';
import "./index.css";
import { courses } from "../../Database";

export default function CoursesNavigation() {
  const [activeItem, setActiveItem] = useState('home');

  const defaultCourseName = courses[0]._id;

  const navigationItems = [
    { id: 'home', label: 'Home', path: 'Home' },
    { id: 'modules', label: 'Modules', path: 'Modules' },
    { id: 'piazza', label: 'Piazza', path: 'Piazza' },
    { id: 'zoom', label: 'Zoom', path: 'Zoom' },
    { id: 'assignments', label: 'Assignments', path: 'Assignments' },
    { id: 'quizzes', label: 'Quizzes', path: 'Quizzes' },
    { id: 'grades', label: 'Grades', path: 'Grades' }
  ];

  const handleSetActive = (id: string) => {
    setActiveItem(id);
  };

  const getItemClass = (id: string) => {
    return `list-group-item border border-0 ${activeItem === id ? 'active' : 'text-danger'}`;
  };

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {navigationItems.map((item) => (
        <a key={item.id}
           id={`wd-course-${item.id}-link`}
           href={`#/Kanbas/Courses/${defaultCourseName}/${item.path}`}
           className={getItemClass(item.id)}
           onClick={() => handleSetActive(item.id)}>
          {item.label}
        </a>
      ))}
    </div>
  );
}

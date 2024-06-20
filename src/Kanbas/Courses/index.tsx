import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { courses } from "../Database";
import { FaAlignJustify } from "react-icons/fa6";

export default function Courses() {
  const { cid } = useParams();
  const course = courses.find(course => course._id === cid);
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(path => path);

  const unwantedSegments = ['Kanbas', 'Courses'];
  const filteredSegments = pathSegments.filter(segment => !unwantedSegments.includes(segment));

  const breadcrumbs = filteredSegments.map((segment, index) => {
    if (segment === cid && course) {
      return course.name;
    }

    if (index === filteredSegments.length - 1) {
      switch (segment) {
        case 'Home': return 'Home';
        case 'Modules': return 'Modules';
        case 'Assignments': return 'Assignments';
        case 'Grades': return 'Grades';
        default: return segment.charAt(0).toUpperCase() + segment.slice(1);
      }
    }
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  }).join(' > ');

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-3 fs-4 mb-1" />
        {breadcrumbs}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/
" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grades />} />
            <Route path="Course/
" element={
                <div>
                  <h2 className="text-danger">
                    <FaAlignJustify className="me-4 fs-4 mb-1" />
                    {course ? course.name : "Course not found"}
                  </h2>
                </div>
              } />
          </Routes>
        </div>
      </div>
    </div>
  );
}
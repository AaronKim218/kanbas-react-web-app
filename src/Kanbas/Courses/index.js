import { Navigate, Route, Routes, useParams, useLocation, Link }
  from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import axios from "axios";
import  { useState, useEffect } from "react";

function Courses() {
  const { courseId } = useParams();
  const URL = `${process.env.REACT_APP_API_BASE}/courses`;
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };

  // get url from browser
  const { pathname } = useLocation();
  const split = pathname.split("/");
  const last = split[split.length - 1];

  // find indes of "Courses" in split
  const index = split.indexOf("Courses");

  // home path is everything up to and including "Courses" plus the course id plus "Home"
  const homePath = split.slice(0, index + 2).join("/") + "/Home";

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);


  return (
    <div>
      <nav className="m-2" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><Link to={homePath}>{course.name}</Link></li>
          <li class="breadcrumb-item active" aria-current="page">{last}</li>
        </ol>
      </nav>
      <div className="d-flex">
        <CourseNavigation />
        <div>
          <div className="d-flex">
            <h1>Course {course.name}</h1>
          </div>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId"
                    element={<AssignmentEditor/>}/>            
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
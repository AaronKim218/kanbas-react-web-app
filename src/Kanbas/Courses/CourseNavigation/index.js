import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";


function CourseNavigation() {
  const links = ["Home", "Modules", "Assignments", "Grades", "Piazza", "Quizzes"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="list-group" style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          style={{ color: `${pathname.includes(link) && "#000000"}`}}
          className={`m-2 list-group-item-custom ${!pathname.includes(link) ? "text-danger" : "selected"}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}


export default CourseNavigation;
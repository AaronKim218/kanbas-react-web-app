import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import courseCard1 from "../../assets/courseCard1.jpeg";
import courseCard2 from "../../assets/courseCard2.jpeg";
import courseCard3 from "../../assets/courseCard3.jpeg";
function Dashboard() {
  const courses = db.courses;
  const images = [courseCard1, courseCard2, courseCard3];
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="row">
        {courses.map((course, index) => (
            <div class="col-3 col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <div class="card courseCard">
                    <img class="card-img-top" src={images[index]} alt="Card image cap"/>
                    <div class="card-body">
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                        {course.name}
                    </Link>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
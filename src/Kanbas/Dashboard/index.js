import { React } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import courseCard1 from "../../assets/courseCard1.jpeg";
import courseCard2 from "../../assets/courseCard2.jpeg";
import courseCard3 from "../../assets/courseCard3.jpeg";
function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }) {
  const images = [courseCard1, courseCard2, courseCard3];

  return (
    <div className="m-4">
      <h1>Dashboard</h1>
      <h5>Course</h5>
      <input value={course.name} className="form-control w-25 m-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control w-25 m-2"
        onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control w-25 m-2" type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value }) } />
      <input value={course.endDate} className="form-control w-25 m-2" type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button onClick={addNewCourse} className="btn btn-success m-2">Add</button>
      <button onClick={updateCourse} className="btn btn-secondary m-2">Update</button>
      <div className="row">
        {courses.map((course, index) => (
            <div class="col-3 col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <div class="card courseCard">
                    <img class="card-img-top" src={images[index%3]} alt="Card image cap"/>
                    <div class="card-body">
                      <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                        <button
                          className="btn btn-primary"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}>
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}>
                          Delete
                        </button>
                        <br />
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
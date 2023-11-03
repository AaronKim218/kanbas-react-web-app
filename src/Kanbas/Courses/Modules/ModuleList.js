import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";


function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div className="list-group">
      <div className="list-group-item d-flex flex-column mb-4">
        <input className="m-2" value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <textarea className="m-2" value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
        <div className="m-2">
          <button className="btn btn-secondary float-end" onClick={() => dispatch(updateModule(module))}>Update</button>
          <button className="btn btn-success float-end" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
        </div>
      </div>
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <div key={index} className="list-group-item bg-secondary m-2">
             <h4>{module.name}</h4>
             <p>{module.description}</p>
             <p>{module._id}</p>
             <button
                className="btn btn-danger float-end"
                onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>
             <button
                className="btn btn-primary float-end"
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>
           </div>
      ))
      }
    </div>
  );
}
export default ModuleList;
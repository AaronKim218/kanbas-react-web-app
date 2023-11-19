import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";


function ModuleList() {
  const { courseId } = useParams();

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleAddModule = () => {

    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
    console.log("updated modules")
    console.log(modules)
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

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
          <button className="btn btn-secondary float-end" onClick={handleUpdateModule}>Update</button>
          <button className="btn btn-success float-end" onClick={handleAddModule}>Add</button>
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
                onClick={() => handleDeleteModule(module._id)}>
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
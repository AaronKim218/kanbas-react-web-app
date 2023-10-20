import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div className="list-group">
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <div key={index} className="list-group-item bg-secondary m-2">
             <h4>{module.name}</h4>
             <p>{module.description}</p>
           </div>
      ))
      }
    </div>
  );
}
export default ModuleList;
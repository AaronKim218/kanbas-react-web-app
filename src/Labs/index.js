// import ConditionalOutput from "./a3/ConditionalOutput";
// import Styles from "./a3/Styles";
// import Classes from "./a3/Classes";
// import PathParameters from "./a3/PathParameters";
// import JavaScript from "./a3/JavaScript";
// import TodoList from "./a3/todo/TodoList";

// function Assignment3() {
//  return (
//    <div>
//         <h1>Assignment 3</h1>
//         <ConditionalOutput/>
//         <Styles/>
//         <Classes/>
//         <PathParameters/>
//         <JavaScript/>
//         <TodoList/>
//    </div>
//  );
// }
// export default Assignment3;

import store from "./store";
import { Provider } from "react-redux";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Assignment5 from "./a5";
import { Routes, Route, Navigate } from "react-router";
import Nav from "../Nav";
function Labs() {
 return (
  <Provider store={store}>
   <div>
    <Nav/>
    <Routes>
      <Route path="/" element={<Navigate to="a3"/>}/>
      <Route path="a3" element={<Assignment3/>}/>
      <Route path="a4" element={<Assignment4/>}/>
      <Route path="a5" element={<Assignment5/>}/>
    </Routes>
   </div>
  </Provider>
 );
}
export default Labs;
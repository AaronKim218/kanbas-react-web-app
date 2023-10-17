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

import Assignment3 from "./a3";
import Nav from "../Nav";
function Labs() {
 return (
   <div>
     <Nav/>
     <Assignment3/>
   </div>
 );
}
export default Labs;
import ModuleList from "../Modules/ModuleList";
import "./index.css";
import StatusLink from "./StatusLink";


function Home() {
  return (
    <div className="d-flex">
      <div className="wide">
        <h2>Home</h2>
        <ModuleList />
      </div>
      <div className="d-flex flex-col">
        <div className="list-group status-links">
          <StatusLink>Import Existing Content</StatusLink>
          <StatusLink>Import from Commons</StatusLink>
          <StatusLink>Choose Home Page</StatusLink>
          <StatusLink>View Course Stream</StatusLink>          
        </div>
      </div>
    </div>
  );
}
export default Home;
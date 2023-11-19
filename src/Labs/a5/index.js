import EncodingParametersInURLs from "./EncodingParamtersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
function Assignment5() {
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href={`${process.env.REACT_APP_LAB_BASE}/welcome`}
             className="list-group-item">
            Welcome
          </a>
        </div>
        {/* <SimpleAPIExamples /> */}
        <EncodingParametersInURLs />
        <WorkingWithObjects />
        <WorkingWithArrays />
      </div>
    );
  }
  export default Assignment5;
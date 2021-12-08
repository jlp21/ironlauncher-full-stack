import "../App.css";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="App">
      <h1>Projects</h1>

      <Link to={{ pathname: "https://jlp21.github.io/soccergame/" }} target="_blank"/> UEFA Penalty Shootout <Link/>


    </div>
  );
}

export default Projects;

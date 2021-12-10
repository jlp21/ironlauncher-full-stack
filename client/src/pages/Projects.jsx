import "../App.css";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="App">
      <h1>Projects</h1>


      {/* <Link to={{ pathname: "https://jlp21.github.io/soccergame/" }} target="_blank"/> UEFA Penalty Shootout <Link/> */}

      <a target="_blank" href="https://jlp21.github.io/soccergame/">UEFA Penalty Shootout</a><br/>

      <a target="_blank" href="https://car-american.herokuapp.com/">CarAmerican</a><br/>

      <a target="_blank" href="https://the-academy-hacks.netlify.app/">Academy Hacks</a>



    </div>
  );
}

export default Projects;

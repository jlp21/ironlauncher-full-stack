import "../App.css";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="App">
      <h1>Projects</h1>


      {/* <Link to={{ pathname: "https://jlp21.github.io/soccergame/" }} target="_blank"/> UEFA Penalty Shootout <Link/> */}

      <a target="_blank" rel="noreferrer" href="https://jlp21.github.io/soccergame/">
      <button className="btn green">UEFA Penalty Shootout</button></a><br/>

      <a target="_blank" rel="noreferrer" href="https://car-american.herokuapp.com/">
      <button className="btn red">CarAmerican</button></a><br/>

      <a target="_blank" rel="noreferrer" href="https://the-academy-hacks.netlify.app/">
      <button className="btn blue">Academy Hacks</button></a>



    </div>
  );
}

export default Projects;

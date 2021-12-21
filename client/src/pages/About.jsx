import "../App.css";
import "../pages/About.css"
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="App">
      <h1>About</h1>

      <div className="photo">
          <h2>image to go here</h2>
      </div>


      <div className="AboutMe">
      <p>
           Hi! My name is Joe Portelli, I am a full stack web developer and have experience using HTML, Javascript, CSS, Canvas, React, Node.js and Express.js. 
           As well as REST API, MongoDB, Postman & Git/Github.
           I have professional experience working for a national distribution company and I am in the process of a career change. 
           I am looking to work in the tech industry for a company that values its employees and recognizes those who are willing to make a positive influence. 
      </p>
      </div>

      <div>

      <a target="_blank" rel="noreferrer" href="https://github.com/jlp21">Github</a><br/><br/>

      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/josephlportelli/">LinkedIn</a><br/>

      </div>



    </div>
  );
}

export default About;
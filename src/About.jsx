import "./about.css";
import ProPic from "./assets/ProfilePic copy.jpeg";

function About() {
  //1170
  return (
    <div className="column-container centered futura">
      <div id="lower-about" className="row-container centered futura">
        <img src={ProPic} id="propic" />
        <div id="paragraph">
          <p>
            <strong> Education: </strong>
            Fullstack Academy and Bates College
            <br></br>
            <br></br>
            <strong> GPA: </strong>
            3.9, Cum Laude
            <br></br>
            <br></br>
            <strong> Honors: </strong>Fulbright Scholar, Excellence in
            Quantitative Research Award (Bates College)
            <br></br>
            <br></br>
            <strong> Bio: </strong>I am a web developer with an interest in
            projects that are visually appealing and functional. I have burned
            the midnight oil during the past year to learn how to build apps
            using the NERP stack (Node.js, ExpressJS, ReactJS, PostgreSQL). As a
            former teacher with the Fulbright foundation, I think I bring a
            unique blend of people skills and technical ability that can't be
            found in every programmer.
            <br></br>
            <br></br>
            <strong> Languages (for coding): </strong> JavaScript, CSS, Haskell, Python,
            HTML
            <br></br>
            <br></br>
            <strong>Backend tech:</strong> Node.js, Express, Sequelize.js, SQL,
            PostgreSQL, RESTful APIs
            <br></br>
            <br></br>
            <strong>Frontend tech:</strong> ReactJS, React-Redux, Material UI,
            Bootstrap
            <br></br>
            <br></br>
            <strong>Cloud/Hosting tech:</strong> AWS, Render, Github Pages
            <br></br>
            <br></br>
            <strong> Languages (for speaking): </strong>
            English (Fluent), Mandarin Chinese (Business proficient)
            <br></br>
            <br></br>
            <strong> Interests: </strong>
            Running, Art, Tennis
            <br></br>
            <br></br>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

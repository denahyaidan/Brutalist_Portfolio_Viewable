import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import Vaporwave from "./assets/Vaporwave.png";
import Contact from "./Contact";
import About from "./About";
import AdditionalResources from "./AdditionalResources";
import "./App.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div id="front-page" className="column-container centered">
        <img src={Vaporwave} id="logo-image" />
        <h1 id="software-engineer" className="futura">
          Software Engineer{" "}
        </h1>
      </div>
      <AdditionalResources />
      <div id="projects">
        <h1 className="projects-title">P R O J E C T S</h1>
        <ProjectCard
          Title={"Polimorphic"}
          Github={null}
          Demo={"https://www.polimorphic.com/"}
          FolderPath={"Polimorphic"}
          Description={
            "Implemented a copilot button to autogenerate email responses to casefiles using a LLM. Option to input custom prompts. Several other projects including a filtering system, close case button, and warnings if users are unassigned. Currently in use by local governments across the US. Written in Haskell."
          }
        />
        <ProjectCard
          Title={"Polifacts"}
          Github={"https://github.com/FS-Capstone-Team-4/capstone"}
          Demo={"https://polifacts.onrender.com/#"}
          FolderPath={"Polifacts"}
          Description={
            "Polifacts makes information about your congressmembers easily accessible. Once you enter your zipcode, click to view details about your local representatives. If you want to learn about other states and bills or decided not to share your location, navigate our sidebar to the left to learn more about bills by keyword or search members by state."
          }
        />

        {/* <ProjectCard
          Title={"Vaporwave"}
          Github={"https://github.com/denahyaidan/VaporwavePortfolio"}
          Demo={"https://denahyaidan.github.io/PortfolioRepo/"}
          FolderPath={"Vaporwave"}
          Description={
            "A vaporwave aesthetic portfolio site I used before I migrated here."
          }
        /> 
        <ProjectCard
          Title={"Bookstore"}
          FolderPath={"Bookstore"}
          Github={"https://github.com/bookwormzz/bookstore"}
          Demo={null}
          Description={
            "Student project that calls to a google API and PostgreSQL database to display books, add to cart, and save order history. Authentication in JWT."
          }
        />
        <ProjectCard
          Title={"ThreeJS Space"}
          FolderPath={"ThreeJS"}
          Github={"https://github.com/denahyaidan/Portfolio"}
          Description={
            "A site built in ThreeJS to simulate floating through space as you scroll. Could be used for a portfolio or somewhere to host any static information."
          }
          Demo={null}
        /> */}
      </div>
      <div id="about">
        <h1 className="projects-title">A B O U T</h1>
        <About />{" "}
      </div>

      <div id="contact">
        <h1 className="projects-title">C O N T A C T</h1>

        <Contact />
      </div>
    </>
  );
}

export default App;

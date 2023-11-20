//import photos so they are included in the build
// import ThreeJS0 from "./assets/ThreeJS0.png";
// import ThreeJS1 from "./assets/ThreeJS1.png";
// import ThreeJS2 from "./assets/ThreeJS2.png";
import Polifacts0 from "./assets/Polifacts0.png";
import Polifacts1 from "./assets/Polifacts1.png";
import Polifacts2 from "./assets/Polifacts2.png";
import Copilot from "./assets/Copilot.png";
import Homepage from "./assets/Homepage.png";
import Unassigned from "./assets/Unassigned2.png"

// import Vaporwave0 from "./assets/Vaporwave0.png";
// import Vaporwave1 from "./assets/Vaporwave1.png";
// import Vaporwave2 from "./assets/Vaporwave2.png";
// import Bookstore0 from "./assets/Bookstore0.png";
// import Bookstore1 from "./assets/Bookstore1.png";
// import Bookstore2 from "./assets/Bookstore2.png";


import "./projectCards.css";
import GithubLogo from "./assets/GitHub.png";
import SiteLogo3 from "./assets/SiteLogo3.png";

import { useState, useRef } from "react";
import { useEffect } from "react";

const ProjectCard = ({ Title, Github, Demo, FolderPath, Description }) => {
  let fileURLs = [];

  if (FolderPath === "Vaporwave") {
    fileURLs = [Vaporwave0, null, Vaporwave1, Vaporwave2];
  } else if (FolderPath === "ThreeJS") {
    fileURLs = [ThreeJS0, null, ThreeJS1, ThreeJS2];
  } else if (FolderPath === "Polifacts") {
    fileURLs = [Polifacts0, null, Polifacts1, Polifacts2];
  } else if (FolderPath === "Bookstore") {
    fileURLs = [Bookstore0, null, Bookstore1, Bookstore2];
  } else if (FolderPath === "Polimorphic") {
    fileURLs = [Homepage, null, Copilot, Unassigned];
  }

  const [idx, setIdx] = useState(1);
  const [image, setImage] = useState(fileURLs[0]);

  function handleClick(url) {
    window.open(url, "_blank");
  }

  function handleFrontHalf() {
    console.log("idx", idx);

    if (idx === 3) setIdx(0);
    else setIdx(idx + 1);
    console.log("idx", idx);
    setImage(fileURLs[idx]);
  }

  return (
    <div>
      <div id="project-card-container">
        <div id="project-card" className="row-container">
          {image ? (
            <img
              src={image}
              className="project-image"
              alt={"failed to load"}
              onClick={handleFrontHalf}
            />
          ) : (
            <div
              
              className="futura description column-container centered"
              onClick={handleFrontHalf}
            >
              {Description}
            </div>
          )}
        </div>
      </div>
      <div className="futura row-container" id="project-title-individual">
        <div className="title">{Title}</div>

        <div className="row-container git-and-demo">
          {Github ? (
            <div
              className="column-container centered"
              onClick={() => handleClick(Github)}
            >
              <img
                src={GithubLogo}
                className="side-button-photo git"
                onClick={() => handleClick(Github)}
              />
            </div>
          ) : null}

          {Demo ? (
            <div
              className="column-container centered"
              onClick={() => handleClick(Demo)}
            >
              <img src={SiteLogo3} className="side-button-photo grayscale" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

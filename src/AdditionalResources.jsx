import "./additional-resources.css";
import ArticleIcon from "@mui/icons-material/Article";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";

function AdditionalResources() {
  function handleClick(url) {
    window.open(url);
  }

  return (
    <div className="row-container centered icon-button-container">
      <div className="column-container centered individual-button">
        <IconButton
          onClick={() =>
            handleClick(
              "https://docs.google.com/document/d/1B2OkoeTVXwRNlbdGDppVuRzoirtFKBArcTbrWezVPBI/edit?usp=sharing"
            )
          }
        >
          <ArticleIcon class="icon-button" />
        </IconButton>
      </div>

      <div className="column-container centered individual-button">
        <IconButton
          onClick={() => handleClick("https://github.com/denahyaidan")}
        >
          <GitHubIcon class="icon-button" />
        </IconButton>
      </div>

      <div className="column-container centered individual-button">
        <IconButton
          onClick={() =>
            handleClick("https://www.linkedin.com/in/aidan-denahy/")
          }
        >
          <LinkedInIcon class="icon-button" />
        </IconButton>
      </div>
    </div>
  );
}

export default AdditionalResources;

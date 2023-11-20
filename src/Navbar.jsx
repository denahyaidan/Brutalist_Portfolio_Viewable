import "./navbar.css";
import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [scrolledPast100vh, setScrolledPast100vh] = useState(false);
  const [vfWidth, setVfWidth] = useState(0);

  const viewfinderRef = useRef(null);



  //Navbar color change effect
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollPosition = scrollTop / viewportHeight;

      setScrolledPast100vh(scrollPosition > 1); // Check if scroll position is greater than 1 (equivalent to 100vh)
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    const updateViewfinderWidth = () => {
      if (viewfinderRef.current) {
        const width = viewfinderRef.current.clientWidth;
        setVfWidth(width);
      }
    };

    // Initial measurement when the component mounts
    updateViewfinderWidth();

    // Attach the resize event listener
    window.addEventListener('resize', updateViewfinderWidth);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateViewfinderWidth);
    };
  }, []);



  //Navbar navigation
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  let color = scrolledPast100vh ? "white" : vfWidth<830? "orange": null;
  let fontColor = "black";

  return (
    <div  ref={viewfinderRef} className="navbar">
      <div
        className="logo"
        style={{
          color: fontColor,
        }}
      >
        {" "}
        Aidan Denahy{" "}
      </div>
      <ul
        style={{
            backgroundColor: color,
        }}
      >
        <li>
          <div
            className="tab"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </div>
        </li>
        <li>
        <div

            className="tab"
            onClick={() => scrollToSection("about")}
          >
            About
          </div>
        </li>
        <li>
        <div

            className="tab"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../pages/projects" // <--- IMPORT YOUR PROJECTS DATA

gsap.registerPlugin(useGSAP, ScrollTrigger); // <--- Register ScrollTrigger correctly

const Work = () => {
  useGSAP(() => {
    // This logic correctly calculates the scroll distance based on the number of elements
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (box.length === 0) return 0; // Guard clause

      const workContainer = document.querySelector(".work-container");
      if (!workContainer) return 0;

      const rectLeft = workContainer.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      return rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    const translateX = setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${translateX}`, // Dynamically set the end point
        scrub: true,
        pin: true,
        invalidateOnRefresh: true, // Recalculate on window resize
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none", // Use a linear ease for smooth scrolling
    });
  }, [projects]); // <--- Add projects as a dependency

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {/* MAP OVER YOUR DYNAMIC PROJECT DATA */}
          {projects.map((project, index) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  {/* Use dynamic index */}
                  <h3>0{index + 1}</h3>
                  <div>
                    {/* Use dynamic title and description */}
                    <h4>{project.title.toUpperCase()}</h4>
                  </div>
                </div>
                <h4>Tools and features</h4>
                {/* Use dynamic tools */}
                <p>{project.tools}</p>
              </div>
              {/* Use dynamic image */}
              <WorkImage image={project.image} alt={project.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
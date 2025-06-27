import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Engineering</h4>
                <h5>CSE with Specialization in Artificial Intelligence and Machine Learning</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Currently Pursuing my Bachelors Degree At Chitkara University (Punjab) in the field of Computer Science with Specialization in Artificial Intelligence.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Executive</h4>
                <h5>Coding Ninjas CUIET</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Working as Technical Executive at Coding Ninjas CUIET.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;

import React from "react";
import ProjectJson from "../../Json/ProjectCards.json";
function Project() {
  return (
    <div className="container">
      <div class="row justify-content-center">
        {ProjectJson.map((project) => {
          return(
            <>
                <div class="col-4">
            <div className="card">
              <img
                src={project.img}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h4 className="card-title">{project.title} </h4>
                <p className="card-text">
                  {project.description}
                </p>
                <div className="d-flex justify-content-around">
                  <a href={project.github} className="btn btn-primary">
                    Github
                  </a>
                  <a href={project.liveDemo} className="btn btn-primary">
                    Canlı Demo
                  </a>
                </div>
              </div>
            </div>
          </div>;
            </>
          )
        })}
      </div>
    </div>
  );
}

export default Project;

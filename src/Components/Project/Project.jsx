import React from "react";
import ProjectJson from "../../Json/ProjectCards.json";
function Project() {
  return (
    <div className="container project">
      <h1 className="text-center">Projelerim</h1>
      <div class="row justify-content-center mt-5 mb-5">
        <div className="col-md-8">
          <div className="row g-4">
          {ProjectJson.map((project) => {
          return (
            <>
              <div class="col-12 col-md-6">
                <div className="card">
                  <img src={project.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title">{project.title} </h4>
                    <p className="card-text">{project.description}</p>
                    <div className="d-flex justify-content-around">
                      <a href={project.github} className="project-button btn btn-outline">
                        Github
                      </a>
                      <a href={project.liveDemo} className="project-button btn btn-outline">
                        Canlı Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

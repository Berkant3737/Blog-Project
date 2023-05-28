import React, { Fragment } from "react";
import SkillsJson from "../../Json/Skills.json";
function Skills() {
  return (
    <div className="container mt-3" id="tecrubelerim">
      <div className="row text-center">
        <div className="col-12">
          <h1>Tecrübelerim</h1>
          <div className="row justify-content-center mt-4">
            <div className="col-9 col-md-7">
              <div className="row gy-4">
                {SkillsJson.map((skills) => {
                  return (
                    <Fragment>
                      {/* COL */}
                      <div className="col-12 col-md-6">
                        <div className="skill-card">
                          <img src={skills.svg} className="skills-icon" alt="Html" />
                          <span className="ps-1">{skills.name} </span>
                        </div>
                      </div>
                      {/* COL */}
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Skills;

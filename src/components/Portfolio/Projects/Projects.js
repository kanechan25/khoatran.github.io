import React from 'react';
import { projectData } from './projectData';
import './project.scss';

const Projects = () => {
    return (
        <div id="project" className="projectContainer">
            <div className="headerContainer">
                <p className="headerTitle">Projects</p>
            </div>
            <div className="projectContentContainer container">
                {projectData.map((prjs, index) => (
                    <div className="projectCard row">
                        <div className="projectCardContent">
                            <div className="projectCardFront">
                                <img
                                    className="project-img"
                                    src={prjs.employerImg.img}
                                    alt=""
                                />
                                <div>{prjs.employer}</div>
                                <div>{prjs.jobTitle}</div>
                                <div>{prjs.date}</div>
                            </div>
                            <div className="projectCardBack">
                                <img
                                    className="project-img"
                                    src={prjs.employerImg.img}
                                    alt=""
                                />
                                <div>{prjs.employer}</div>
                                <div>{prjs.jobTitle}</div>
                                <div>{prjs.date}</div>
                            </div>
                        </div>
                        <ul>
                            {prjs.descs.map((desc) => (
                                <li>{desc}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

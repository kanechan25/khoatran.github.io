import React from 'react';
import { projectData } from './projectData';
import './project.scss';

const Projects = () => {
    return (
        <div id="project" className="projectContainer container">
            <div className="headerContainer">
                <p className="headerTitle">Projects</p>
            </div>
            <div className="projectContentContainer row">
                {projectData.map((item, index) => (
                    <div className="projectCard col-lg-4 col-sm-6 col-12">
                        <div className="projectCardContent">
                            <div className="projectCardFront">
                                <img
                                    className="project-img"
                                    src={item.projectImg}
                                    alt=""
                                />
                                <div className='card-info'>
                                    <div>{item.project}</div>
                                </div>
                            </div>
                            <div className="projectCardBack">
                                <img
                                    className="project-img"
                                    src={item.projectImg}
                                    alt=""
                                />
                                <div className='card-info'>
                                    <div>{item.project}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

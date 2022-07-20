import React, { useEffect, useState } from 'react';
import './NavMenu.scss';

function NavMenu() {
    useEffect(() => {
        let navList = document.querySelectorAll('.nav-list');
        function activeLink() {
            navList.forEach((item) => item.classList.remove('active'));
            this.classList.add('active');
        }
        navList.forEach((item) => {
            item.addEventListener('click', activeLink);
        });
    });
    return (
        <div className="nav-menu">
            <div className="navigation">
                <ul>
                    <li className="nav-list active">
                        <a className="alink">
                            <span className="nav-icon">
                                <i className="fas fa-home"></i>
                            </span>
                            <span className="nav-text">Home</span>
                        </a>
                    </li>
                    <li className="nav-list">
                        <a className="alink">
                            <span className="nav-icon">
                                <i className="fas fa-tasks-alt"></i>
                            </span>
                            <span className="nav-text">Projects</span>
                        </a>
                    </li>
                    <li className="nav-list">
                        <a className="alink">
                            <span className="nav-icon">
                                <i className="fas fa-tools"></i>
                            </span>
                            <span className="nav-text">Skills</span>
                        </a>
                    </li>
                    <li className="nav-list">
                        <a className="alink">
                            <span className="nav-icon">
                                <i className="fas fa-briefcase"></i>
                            </span>
                            <span className="nav-text">Experience</span>
                        </a>
                    </li>
                    <li className="nav-list">
                        <a className="alink">
                            <span className="nav-icon">
                                <i className="fas fa-address-book"></i>
                            </span>
                            <span className="nav-text">Contact</span>
                        </a>
                    </li>
                    <div className="indicator"></div>
                </ul>
            </div>
        </div>
    );
}
export default NavMenu;

import React, { useEffect, useState } from 'react';

import Themetoggle from '../Darkmode/Darkmode';
import './NavMenu.scss';

function NavMenu() {
    return (
        <div className="navigation">
            <Themetoggle />
            <ul>
                <li className="nav-list container">
                    <a className="row">
                        <span className="nav-icon"></span>
                        <span className="nav-text">Home</span>
                    </a>
                </li>
                <li className="nav-list container">
                    <a className="row">
                        <span className="nav-icon"></span>
                        <span className="nav-text">Projects</span>
                    </a>
                </li>
                <li className="nav-list container">
                    <a className="row">
                        <span className="nav-icon"></span>
                        <span className="nav-text">Skills</span>
                    </a>
                </li>
                <li className="nav-list container">
                    <a className="row">
                        <span className="nav-icon"></span>
                        <span className="nav-text">Experience</span>
                    </a>
                </li>
                <li className="nav-list container">
                    <a className="row">
                        <span className="nav-icon"></span>
                        <span className="nav-text">Contact</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}
export default NavMenu;

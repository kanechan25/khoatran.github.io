import React from 'react';
import Projects from './components/Portfolio/Projects/Projects';
import Themetoggle from './components/Darkmode/Darkmode';
import NavMenu from './components/NavMenu/NavMenu';

const Portfolio = () => {
    return (
        <div>
            <Themetoggle />
            <NavMenu />
            <Projects />
        </div>
    );
};

export default Portfolio;

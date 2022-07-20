import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomScrollbars from './components/Scrollbar/CustomScrollbar';
import Portfolio from './Portfolio';

function App() {
    return (
        <div className="App ">
            <BrowserRouter>
                <CustomScrollbars style={{ height: '100vh', width: '100%' }}>
                    <Routes>
                        <Route exact path="" element={<Portfolio />}></Route>
                    </Routes>
                </CustomScrollbars>
            </BrowserRouter>
        </div>
    );
}

export default App;

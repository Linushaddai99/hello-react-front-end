import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Greeting from './component/Greeting';

function App() {
  return (
    <>
        <BrowserRouter>
            <div>
                <Routes>
                <Route path="/greeting" element={<Greeting />} />
                </Routes>
            </div>
        </BrowserRouter>
    </>
  );
}

export default App

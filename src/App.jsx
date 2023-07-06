import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import Thanks from "./pages/thanks.jsx";

function App() {

  return (
    <Fragment>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thanks" element={<Thanks />} />
          </Routes>
        </BrowserRouter>
    </Fragment>
  )
}

export default App

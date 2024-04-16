import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Example1 from "./pages/Example1";

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Example1 />} />
          </Route>
        </Routes>
    </>
  )
}

export default App
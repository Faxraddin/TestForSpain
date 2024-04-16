import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Example1 from "./pages/Example1";
import Example2 from "./pages/Example2";
import Example3 from "./pages/Example3";
import Example4 from "./pages/Example4";
import Example5 from "./pages/Example5";

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Example1 />} />
            <Route path="/Example2" element={<Example2 />} />
            <Route path="/Example3" element={<Example3 />} />
            <Route path="/Example4" element={<Example4 />} />
            <Route path="/Example5" element={<Example5 />} />
          </Route>
        </Routes>
    </>
  )
}

export default App
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import CountryInfo from "./components/pages/CountryInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Routes><Route path="/" element={<Home />} /></Routes> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<CountryInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

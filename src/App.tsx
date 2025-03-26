import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import AboutUs from './pages/AboutUs';
const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<AboutUs />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

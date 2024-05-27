import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { homeRoutes } from "../routes/RoutesConfig.jsx";
import NotFound from "../components/NotFound/NotFound.jsx";

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        {homeRoutes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
        {/* Display not found page when the URL does not exist */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;

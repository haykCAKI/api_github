import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import RepositoriesPage from "./pages/RepositoriesPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/:login/repositories" element={<RepositoriesPage />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

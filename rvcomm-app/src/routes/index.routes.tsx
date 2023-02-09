import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthenticatedRoutes } from "./authenticated.routes";
import * as Pages from "../pages/auth/index";

const ApplicationRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<Pages.Sign />} />
        <Route path="/app/*" element={<AuthenticatedRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export { ApplicationRoutes };

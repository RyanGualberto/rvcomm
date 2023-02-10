import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import * as AuthPages from "../pages/app/";
import { Footer, Navbar } from "../components/";
import "./app.styles.scss";

const AuthenticatedRoutes = () => {
  const is_logged = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    // if (!is_logged) {
    //   navigate("/app/home");
    // }
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/home" element={<AuthPages.Home />} />
        <Route path="/catalogo/*" element={<AuthPages.Catalogo />} />
        <Route path="/produto/:id" element={<AuthPages.Produto />} />
      </Routes>
      <Footer />
    </div>
  );
};

export { AuthenticatedRoutes };

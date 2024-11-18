import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Header from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import { routes } from "./types/routes";
import "./styles/global.css";
import "./styles/theme.css";
import "./styles/variable.css";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="app-container">
          <Header />
          <main className="main-content">
            <Routes>
              {Object.keys(routes).map((key) => {
                const {
                  path,
                  component: Component,
                  private: isPrivate,
                  redirectTo,
                } = routes[key];

                // Handle private routes if necessary
                if (isPrivate) {
                  return (
                    <Route
                      key={key}
                      path={path}
                      element={
                        isAuthenticated() ? (
                          <Component />
                        ) : (
                          <Navigate to={redirectTo || "/login"} />
                        )
                      }
                    />
                  );
                }
                return <Route key={key} path={path} element={<Component />} />;
              })}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

// Placeholder authentication function
const isAuthenticated = (): boolean => {
  return true; // Replace with actual auth logic
};

export default App;
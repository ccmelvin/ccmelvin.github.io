import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import { routes } from "./types/routes";
import './styles/global.css'
import './styles/theme.css'
import './styles/variable.css'

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            {Object.keys(routes).map((key) => {
              const { path, component: Component, private: isPrivate, redirectTo } = routes[key];
              
              if (isPrivate) {
                return (
                  <Route
                    key={key}
                    path={path}
                    element={
                      isAuthenticated() ? <Component /> : <Navigate to={redirectTo || '/login'} />
                    }
                  />
                );
              }

              return (
                <Route key={key} path={path} element={<Component />} />
              );
            })}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

// Placeholder authentication function, replace with real auth logic in the future
const isAuthenticated = (): boolean => {
  // This should check if the user is authenticated
  return true; // Set to true or false depending on your auth logic
};

export default App;

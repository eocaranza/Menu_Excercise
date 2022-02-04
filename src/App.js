import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";

const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {});

  const loginAction = () => {
    alert("Loggeado");
  };

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route
            path="/Login"
            exact
            element={<Login onLogin={loginAction} />}
          />
          <Route
            path="/"
            exact
            element={
              <div>
                <h1>Hola mundo</h1>
              </div>
            }
          />
          <Route
            path="/*"
            element={
              <div>
                <h1>Error: Page not Found</h1>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

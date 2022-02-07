import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "./context/Auth";

const App = () => {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/Login" exact element={<Login/>} />
            <Route element={<PrivateRoute />}>
              <Route
                path="/"
                exact
                element={
                  <div>
                    <h1>Hola mundo</h1>
                  </div>
                }
              />
            </Route>
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
    </AuthContext.Provider>
  );
};

export default App;

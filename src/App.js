import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home.jsx";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/Store/auth-context";
import Result from "./components/Result/Result";

function App() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <>
      <MainHeader />
      <main>
        <Routes>
          {!loggedIn && <Route path="/auth" element={<Login />} />}
          {loggedIn && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/result" element={<Result />} />
            </>
          )}

          <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

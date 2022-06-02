import { React, useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../Store/auth-context";
const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.loggedIn && (
          <>
            <li>Welcome {ctx.userNick}</li>
            <li>
              <button onClick={ctx.onLogOut}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

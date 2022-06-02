import React, { useContext } from "react";
import { useNavigate } from "react-router";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../Store/auth-context";
import Input from "../UI/Input/Input";

const Login = () => {
  const ctx = useContext(AuthContext);

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const userNick = event.target[0].value;
    ctx.onLogin(userNick);
    navigate("/");
  };

  return (
    <>
      <Card className={classes.login}>
        <form onSubmit={submitHandler}>
          <Input label="User Nick name" type={"text"} />

          <div className={classes.actions}>
            <Button type="submit" className={classes.btn}>
              Login
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default Login;

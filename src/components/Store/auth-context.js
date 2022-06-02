import React, { useState, useEffect } from "react";
import getAllData from "../Home/getAllData";

const AuthContext = React.createContext({
  loggedIn: false,
  userNick: "",
  questions: {},
  totalScore: 0,
  onLogin: () => {},
  onLogOut: () => {},
  onIncreaseScore: () => {},
  onDecreaseScore: () => {},
});

export const AuthContextPorvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userNick, setUserNick] = useState("");
  const [totalScore, setTotalScore] = useState(0);

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [inCorrectAnswers, setInCorrectAnswers] = useState(0);

  const [questions, setQuestions] = useState(getAllData());

  const onIncreaseScore = () => {
    setCorrectAnswers(correctAnswers + 1);
  };
  const onDecreaseScore = () => {
    setInCorrectAnswers(inCorrectAnswers + 1);
  };

  useEffect(() => {
    let unmarkedCorrectAnswers = questions.good_words.length - correctAnswers;
    if (correctAnswers > 0 || inCorrectAnswers > 0) {
      setTotalScore(
        correctAnswers * 2 - (inCorrectAnswers + unmarkedCorrectAnswers)
      );
    }
  }, [correctAnswers, inCorrectAnswers, questions]);

  const loginHandler = (userNick) => {
    setIsLoggedIn(true);
    setUserNick(userNick);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    setUserNick("");
    setQuestions(getAllData());
  };
  return (
    <AuthContext.Provider
      value={{
        userNick,
        questions,
        onIncreaseScore,
        onDecreaseScore,
        totalScore,
        loggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogOut: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

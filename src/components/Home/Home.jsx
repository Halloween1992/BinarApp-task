import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";

import AuthContext from "../Store/auth-context";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
let top = [40, 200, 20, 300, 150, 250, 350, 150, 40, 350, 100];

const Home = () => {
  const [correctElements, setCorrectElements] = useState([]);
  const [incorrectElements, setIncorrectElements] = useState([]);
  const [checkAnswers, setCheckAnswers] = useState(false);

  const { questions, onIncreaseScore, onDecreaseScore } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const onClickHandler = (e) => {
    const word = e.target;
    const annotation = e.target.previousElementSibling;
    word.classList = annotation.classList = classes.choosen;
    if (questions.good_words.includes(word.innerText)) {
      setCorrectElements((prevElements) => [...prevElements, word, annotation]);
      onIncreaseScore();
    } else {
      setIncorrectElements((prevElements) => [
        ...prevElements,
        word,
        annotation,
      ]);

      onDecreaseScore();
    }
  };

  const showAnswerHandler = () => {
    setCheckAnswers(true);
    correctElements.map((element) => {
      if (element.innerText === "") {
        element.innerText = "Good";
        element.classList = classes.goodWord;
      }
      return (element.classList = classes.goodWord);
    });

    incorrectElements.map((element) => {
      if (element.innerText === "") {
        element.innerText = "Bad";
      }
      return (element.classList = classes.badWord);
    });

    const allWords = document.querySelectorAll("#word");
    if (allWords.length > 0) {
      allWords.forEach(
        (word) =>
          (word.classList = `${word.classList} " " ${classes.unClickAble}`)
      );
    }
  };
  const finishGameHandler = () => {
    navigate("/result");
  };

  return (
    <Card className={classes.home}>
      <h1>{!checkAnswers ? questions.question : "Here is your result"}</h1>
      <div className={classes.main_container}>
        {questions.all_words.map((word, i) => (
          <div
            className={classes.elements}
            key={word}
            style={{ top: top[i] + "px" }}
          >
            <span></span>
            <p onClick={onClickHandler} id="word">
              {word}
            </p>
          </div>
        ))}
      </div>

      <div className={classes.action}>
        {!checkAnswers && (
          <Button className={classes.btn} onClick={showAnswerHandler}>
            Check answers
          </Button>
        )}
        {checkAnswers && (
          <Button className={classes.btn} onClick={finishGameHandler}>
            Finish game
          </Button>
        )}
      </div>
    </Card>
  );
};

export default Home;

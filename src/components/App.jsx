import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  var questionNumber = 0;
  let [isAnswered, setIsAnswered] = useState(false);

  let correctAnswer = "";
  if (isAnswered === true) {
    correctAnswer =
      data[questionNumber].question.choices[
        data[questionNumber].question.correct_choice_index
      ];
  }

  return (
    <div className="app">
      Trivia!
      <Question
        text={data[questionNumber].question.text}
        choices={data[questionNumber].question.choices}
      />
      <button onClick={() => setIsAnswered(true)}> Answer Question </button>
      <div>{correctAnswer}</div>
      <NextQuestion />
    </div>
  );
}

function Question({ text, choices }) {
  return (
    <div className="Question">
      {text}
      {choices.map((element) => {
        return <Answer text={element} />;
      })}
    </div>
  );
}

function NextQuestion({ text }) {
  return (
    <div className="NextQuestion">
      {" "}
      <button>Next Question</button>{" "}
    </div>
  );
}

function Answer({ text }) {
  return <div className="Answer">{text} </div>;
}

export default App;

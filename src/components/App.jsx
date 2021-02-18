import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  var questionNumber = 0;
  return (
    <div className="app">
      Trivia!
      <Question
        choices={data[questionNumber].question.choices}
        text={data[questionNumber].question.text}
      />
      <NextQuestion />
    </div>
  );
}

// var questionNumber = 0;

// let x = [1,2,3,4]
// console.log(x.map((element) => {
//   return element * 2
// }))

function Question({ text, choices }) {
  var answerChoices = choices.map((choice) => {
    return <Answer text={choice} />;
  });
  return (
    <div className="Question">
      {text}
      {answerChoices}
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

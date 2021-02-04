import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  var questionNumber = 0;
  return (
    <div className="app">
      Trivia!
      <Question text={data[questionNumber].question.text} />
      <NextQuestion />
    </div>
  );
}

// var questionNumber = 0;

function Question({ text }) {
  return (
    <div className="Question">
      {text}
      <Answer text={data[questionNumber].question.choices[0]} />
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

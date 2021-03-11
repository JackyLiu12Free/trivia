import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  // var questionNumber = 0;
  let [isAnswered, setIsAnswered] = useState(false);
  let [questionNumber, setQuestionNumber ] = useState(0);
  let [Answer, setAnswer] = useState();



  if (Answer = ) {

  }


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
      <div><p>Answer: {correctAnswer}</p></div>
      <NextQuestion setIsAnswered= {setIsAnswered} incrementQuestionNumber ={() => setQuestionNumber(questionNumber + 1)} /> 
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

function NextQuestion({ incrementQuestionNumber, setIsAnswered, text }) {
  return (
    <div className="NextQuestion">
      {" "}
      <button onClick={() => {
        incrementQuestionNumber()
        setIsAnswered(false)
        } }>Next Question</button>{" "}
    </div>
  );
}

function Answer({ text }) {
  return <div className="Answer">{text} </div>;
}

export default App;

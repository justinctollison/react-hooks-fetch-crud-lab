import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList( {question} ) {

  const questions = question.map((quest) => 
  <QuestionItem question={quest} key={quest.id} />)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
          {questions}
      </ul>
    </section>
  );
}

export default QuestionList;

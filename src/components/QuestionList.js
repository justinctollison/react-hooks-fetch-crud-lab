import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList( {question, handleDelete, handlePatch} ) {

  const questions = question.map((quest) => 
  <QuestionItem question={quest} id={quest.id} handleDelete={handleDelete} handlePatch={handlePatch} />)

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

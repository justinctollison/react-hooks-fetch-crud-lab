import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [question, setQuestion] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((response) => response.json())
    .then((data) => {
      setQuestion(data)
    })
  }, []);

  console.log(question)

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm prompt={question.prompt} answers={question.answers} correctIndex={question.correctIndex} /> : <QuestionList question={question} />}
    </main>
  );
}

export default App;

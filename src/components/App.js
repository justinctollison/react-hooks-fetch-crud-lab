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

  function handleDelete(id){
      fetch("http://localhost:4000/questions/${id}", 
      {method: "DELETE"})
      .then((response) => response.json())
      .then(() => {
        const deleteQuestion = question.filter((quest) => quest.id !== id)
        setQuestion(deleteQuestion)
      })
  }

  function handlePatch(id, correctIndex){
    fetch("http://localhost:4000/questions",{
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify({correctIndex})
  })
    .then((response) => response.json())
    .then((data) => {
      const patchQuestions = data.map((d) => {
        if (d.id === data.id) return data;
        return d;
      });
      setQuestion(patchQuestions)
    })
  }

  console.log(question)

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm prompt={question.prompt} answers={question.answers} correctIndex={question.correctIndex} /> 
      : <QuestionList question={question} handleDelete={handleDelete} handlePatch={handlePatch} />}
    </main>
  );
}

export default App;

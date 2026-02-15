import React, { useEffect, useState } from "react";
import axios from "axios";

function QuizzApp() {
  const [Data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0)


  useEffect(() => {
    axios("https://the-trivia-api.com/v2/questions")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setErr(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const nextQuestion = ()=>{
    setCurrentQuestion(currentQuestion + 1)
  }
  return (
    <>
      <div>
        <h1>QuizzApp</h1>
      </div>

      {loading && <h2>Loading please wait............</h2>}
      {err && <h2>Error Encountered</h2>}

      {Data ? (
        <div>
          <h1>Q{currentQuestion + 1}: {Data[currentQuestion].question.text} </h1>
          <button onClick={nextQuestion} >Next Question</button>
        </div>
      ) : (
        <h2>Loading.....</h2>
      )}
    </>
  );
}

export default QuizzApp;

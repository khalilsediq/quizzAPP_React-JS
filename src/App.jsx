// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function QuizzApp() {
//   const [Data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [err, setErr] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState(0);

//   useEffect(() => {
//     axios()
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//         setErr(true);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   const nextQuestion = () => {
//     setCurrentQuestion(currentQuestion + 1);
//   };
//   return (
//     <>
//       <div>
//         <h1>QuizzApp</h1>
//       </div>

//       {loading && <h2>Loading please wait............</h2>}
//       {err && <h2>Error Encountered</h2>}

//       {Data ? (
//         <div>
//           <h1>
//             Q{currentQuestion + 1}: {Data[currentQuestion].question.text}{" "}
//           </h1>
//           <button onClick={nextQuestion}>Next Question</button>
//         </div>
//       ) : (
//         <h2>Loading.....</h2>
//       )}
//     </>
//   );
// }

// export default QuizzApp;

/*
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function QuizApp() {
  const [data, setData] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [load, setLoad] = useState(true)
  const [err, setErr] = useState(false)

  useEffect(()=>{
    axios("https://the-trivia-api.com/v2/questions")
    .then((res)=>{
      console.log(res.data)
      setData(res.data)
    })
    .catch(err => {
      console.log(err);     
      setErr(true)
    })
    .finally(()=>{
      setLoad(false)
    })
  }, [])

  const NextBtn = ()=>{
    setCurrentQuestion(currentQuestion + 1)
  }
  return (
    <>
    <h2>Quiz App</h2>
    {load && <h2>Loading please wait..........</h2> }
    {err && <h2>Error Occured</h2>}

    
    {data ? 
    <div>
      <h2>Q{currentQuestion + 1}: {data[currentQuestion].question.text} </h2>
      <button onClick={NextBtn}>Next</button>
      </div>
    : <h1>No Data Found</h1>  
  }
    </>
  )
}

export default QuizApp
*/

import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [questions, setQuestions] = useState(0);

  useEffect(()=>{
    axios("https://the-trivia-api.com/v2/questions")
    .then(res =>{
      console.log(res.data);
      setQuizData(res.data)
    })
    .catch(err => {
      console.log(err);
      setErr(true)
    })
    .finally(()=>{
      setLoading(false)
    })
  }, [])

  const nextQuestion = ()=>{
    setQuestions(questions + 1)
  }
  return (
    <>
      <div>
        <h2>Quizz Application</h2>
        {loading && <h2>Loading........</h2>}
        {err && <h2>Error Occured.......</h2>}

    {quizData ? 
    <div style={{
      border: '1px solid black',
      margin: '10px',
      padding: '10px 8px 10px 8px', 
      borderRadius:'15px',
      fontSize: '15px',
      display: 'flex', 
      flexDirection: 'column',
      
      flexWrap: 'wrap',
      gap: '20px',

}}>
      <h2>Q{questions + 1}: {quizData[questions].question.text}</h2>
      <div style={{
      

      }}>
        <button onClick={nextQuestion}>Next Question</button>
        </div>
      </div>
      
    : <h1>Searching for Data</h1>  
  }
      </div>
    </>
  );
}

export default App;

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
  // const [shuffleArr, setShuffleArr] = useState([])

  useEffect(() => {
    axios("https://the-trivia-api.com/v2/questions")
      .then((res) => {
        console.log(res.data);
        setQuizData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setErr(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const nextQuestion = () => {
    if (questions < quizData.length - 1) {
      setQuestions(questions + 1);
    } else {
      alert("Questions Finished");
    }
  };

  /*
  function shuffleArr(arr) {
    const emptyArr = [];
    const shuffle = []
    for (let i = 0; i < arr.length; i++) {
      const randomNum = Math.ceil(Math.random() * arr.length);
      console.log(randomNum);
      if (emptyArr.includes(randomNum)) {
        // console.log("Number aleready exist");
        i--
      } else {
        emptyArr.push(randomNum);
        shuffle(randomNum) = arr[i]
        // console.log(randomNum);
      }
    }
    // return shuffle
    console.log(shuffle);
    
  }
  shuffleArr([1, 2, 3, 4]);
*/

function shuffleArr(arr) {
    const shuffleArray = []
    const emptyArr = [];
    for (let i = 0; i < arr.length; i++) {
      const randomNum = Math.floor(Math.random() * arr.length);
      if (emptyArr.includes(randomNum)) {
        // console.log("Number aleready exist");
        i--
      } else {
        emptyArr.push(randomNum);
        // console.log(randomNum);
        shuffleArray[randomNum] = arr[i]
      }
      
    }
    // console.log(shuffleArray);
    return shuffleArray
    
  }


  // const previousQuestion = ()=>{
  //   setQuestions(questions - 1)
  // }
  return (
    <>
      <div>
        <h2 >Quizz Application</h2>
        {loading && <h2>Loading........</h2>}
        {err && <h2>Error Occured.......</h2>}

        {quizData ? (
          <div
            style={{
              border: "1px solid black",
              margin: "10px",
              // padding: '10px 8px 10px 8px',
              padding: "20px",
              borderRadius: "15px",
              fontSize: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              alignSelf: "center",
              flexWrap: "wrap",
              gap: "4px",
            }}
          >
            <h2>
              Q{questions + 1}: {quizData[questions].question.text}
            </h2>

            {shuffleArr([...quizData[questions].incorrectAnswers, quizData[questions].correctAnswer ]).map((item, index) => {
              return (
                <div key={`${item} - ${index}`}>
                  <input type="radio" name="question" value={item} id={index} />
                  <label htmlFor={index}>{item}</label>
                </div>
              );
            })}

            {/* <label htmlFor="correctAns">
              <input
                type="radio"
                name="question"
                value={quizData[questions].correctAnswer}
                id="correctAns"
              />
              {quizData[questions].correctAnswer}
            </label> */}

            <button
              style={{ width: "150px", margin: "0px auto" }}
              onClick={nextQuestion}
            >
              Next Question
            </button>
            {/* <button style={{width:'150px', margin: '0px auto'}} onClick={previousQuestion}> Previous Question
        </button> */}
          </div>
        ) : (
          <h1>Searching for Data</h1>
        )}
      </div>
    </>
  );
}

export default App;

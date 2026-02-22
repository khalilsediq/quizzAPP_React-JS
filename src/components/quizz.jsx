import axios from 'axios'
import React, { useEffect, useState } from 'react'
import shuffleArray from 'shuffle-array';

const QuizzApp = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [currentIndex, setIndex] = useState(0)
    const [result, setResult] = useState(false)

    useEffect(()=>{
        axios.get('https://the-trivia-api.com/v2/questions')
        .then((res)=>{
            setData(res.data)
            console.log(res.data);           
        })
        .catch(err =>{
            console.log(err);            
            setError(true)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [])


    //Next Question logic
    const nextQuestion = ()=>{
        setIndex(currentIndex + 1)
    currentIndex < 9 ? setIndex(currentIndex + 1) : setResult(true)
    }

  return (
    <>
    <h2>Quizz App</h2>
    {loading && <h1>Loading please wait......</h1>}
    {error && <h1>An unexpected Error Occured, we will try our best to resolve it</h1>}

    {data && !result  && <div key={data[currentIndex].id}>
        <h1>Q{currentIndex + 1} {data[currentIndex].question.text} </h1>
        {shuffleArray([...data[currentIndex].incorrectAnswers, data[currentIndex].correctAnswer].map((item, index)=>{
            return <div key={`option ${index}`}> 
            <input type="radio" name='question' id={index} value={item} />
            <label htmlFor={index}>{item}</label>
            </div>
        }))}
        </div>
        }
        <button onClick={nextQuestion}>Next</button>
        




        {/* <button onClick={()=>{setIndex(index + 1)}}>Next</button> */}


    {/* {data && data.map((item, index)=>{
        return <div key={item.id}>
            {data[index].question.text}
        </div>
    })} */}
    </>
  )
}

export default QuizzApp
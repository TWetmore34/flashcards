import React from "react"
import { useState, useEffect } from "react"
import Answer from "../components/Answer"
const NewQuiz = () => {
    let count = "a".charCodeAt(0) - 1
    const [editName, setEditName] = useState(true);
    const [quizName, setQuizName] = useState('My Quiz');

    const [formQuestion, setFormQuestion] = useState("");
    const [formAnswer, setFormAnswer] = useState("");

    const [answerArray, setAnswerArray] = useState([]);

    // useEffect(() => {
    //     setCount(count+1);
    // },[answerArray])
    const handleNameForm = (e) => {
        setQuizName(e.target.value)
    }

    const handleAnswerSubmit = (e) => {
        const answer = document.getElementById("answer").value;
        setAnswerArray([...answerArray, answer]);
        console.log(answerArray)
    }
  return (
    <div>
        {editName ? <p className="q-name">{quizName} <span onClick={()=> setEditName(false)} className="edit-btn">edit...</span></p> :
        <div>
            <input type='text' placeholder="Quiz Name" value={quizName} onChange={(e)=> handleNameForm(e)}></input>
            <button onClick={()=> {setEditName(true)}}>Save</button>
        </div>
        }
        <div className="quiz-container">
            <form id="qForm">
                <input className="text-box" placeholder='Question' type='text' onChange={(e) => {setFormQuestion(e.target.value)}} value={formQuestion || ''}></input>
                <p className="inline hidden">+</p>
                <input id="answer" className="text-box" placeholder='Answer' type='text' onChange={(e) => {setFormAnswer(e.target.value) }} value={formAnswer || ''}></input>
                <p className="inline" onClick={(e)=>{handleAnswerSubmit(e)}}>+</p>
            </form>
            
        </div>
        {
                answerArray.map((answer) => {
                    count++
                    return (<Answer key={count} letter={String.fromCharCode(count)} answer={answer} />)
                        })
        }
    </div>
  )
}

export default NewQuiz
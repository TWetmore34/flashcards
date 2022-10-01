import React from 'react'

const Answer = ({answer, key, letter}) => {
  return (
    <div className="answer-container" key={key}>
        <p>{letter}: {answer}</p>
    </div>
  )
}

export default Answer
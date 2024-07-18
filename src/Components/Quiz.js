import { useState, useEffect } from 'react';

function Quiz() {
  const data = [
    {
      "question": "Which company developed JavaScript?",
      "options": [
        "Microsoft",
        "Netscape",
        "Google",
        "Apple"
      ],
      "correctAns": "Netscape"
    },
    {
      "question": "What is the output of `typeof null` in JavaScript?",
      "options": [
        "'object'",
        "'null'",
        "'undefined'",
        "'number'"
      ],
      "correctAns": "object"
    },
    {
      "question": "Which of the following is a JavaScript framework?",
      "options": [
        "Laravel",
        "Angular",
        "Django",
        "Rails"
      ],
      "correctAns": "Angular"
    },
    {
      "question": "How can you add a comment in JavaScript?",
      "options": [
        "<!-- This is a comment -->",
        "// This is a comment",
        "' This is a comment",
        "/* This is a comment */"
      ],
      "correctAns": "// This is a comment"
    },
    {
      "question": "Which of the following is not a reserved word in JavaScript?",
      "options": [
        "interface",
        "throws",
        "program",
        "short"
      ],
      "correctAns": "program"
    },
    {
      "question": "What is the correct syntax for referring to an external script called 'script.js'?",
      "options": [
        "<script src='script.js'>",
        "<script href='script.js'>",
        "<script ref='script.js'>",
        "<script name='script.js'>"
      ],
      "correctAns": "<script src='script.js'>"
    },
    {
      "question": "How do you create a function in JavaScript?",
      "options": [
        "function:myFunction()",
        "function myFunction()",
        "function = myFunction()",
        "function => myFunction()"
      ],
      "correctAns": "function myFunction()"
    },
    {
      "question": "Which built-in method sorts the elements of an array?",
      "options": [
        "changeOrder(order)",
        "order()",
        "sort()",
        "arrange()"
      ],
      "correctAns": "sort()"
    },
    {
      "question": "Which of the following is an advantage of using JavaScript?",
      "options": [
        "Increased interactivity",
        "Less server interaction",
        "Immediate feedback to the visitors",
        "All of the above"
      ],
      "correctAns": "All of the above"
    },
    {
      "question": "Which method is used to find an HTML element by its ID in JavaScript?",
      "options": [
        "getElementById()",
        "getElementByClass()",
        "getElementByTag()",
        "getElementByName()"
      ],
      "correctAns": "getElementById()"
    }
  ];
  
  const [page, setPage] = useState(0);
  const [number, setNumber] = useState(1);
  const [score, setScore] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [incorrectAnswer, setIncorrectAnswer] = useState([]);

  useEffect(() => {
    setPage(Math.floor(Math.random() * data.length));
  }, []);

  const handleAnswerClick = (opt, idx) => {
    setShowCorrectAnswer(true);
    if (opt === data[page].correctAns) {
      setScore((prev) => prev + 10);
    } else {
      setIncorrectAnswer([...incorrectAnswer, idx]);
    }
    setTimeout(() => {
      setShowCorrectAnswer(false);
      handleNext();
    }, 1000);
  };

  const handleNext = () => {
    setNumber((prev) => prev + 1);
    setPage((prev) => (prev + 1) % data.length);
  };

  const handleReset = () => {
    setNumber(1);
    setScore(0);
    setPage(Math.floor(Math.random() * data.length));
    setIncorrectAnswer([]);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px' }}>
      {number <= 10 ? (
        <>
          <h1 style={{ fontSize: '2.2rem', marginBottom: '20px' }}>Quiz App</h1>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Current Score: {score}</h3>
          <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Question {number}/10</p>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '20px' }}>{data[page].question}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {data[page].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswerClick(opt, page)}
                disabled={showCorrectAnswer}
                style={{
                  padding: '10px 20px',
                  margin: '10px',
                  fontSize: '1.2rem',
                  borderRadius: '5px',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: showCorrectAnswer ? (opt === data[page].correctAns ? '#4CAF50' : '#f44336') : '#2196F3',
                  color: '#fff',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  transition: 'background-color 0.3s ease'
                }}
              >
                {opt}
              </button>
            ))}
          </div>
          {showCorrectAnswer && (
            <p style={{ fontSize: '1.2rem', margin: '10px 500px',backgroundColor:"#38A169",padding:"10px"}}>Correct answer: {data[page].correctAns}</p>
          )}
        </>
      ) : (
        <>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '6px' }}>Quiz Completed!</h1>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '3px' }}>Your Score: {score}</h3>
          <h4 style={{ fontSize: '1.3rem', marginBottom: '5px' }}>Questions which are Incorrect:</h4>
          <div style={{ textAlign: 'left', width: '60%', margin: '0 auto' }}>
            {incorrectAnswer.map((idx) => (
              <div key={idx} style={{ marginBottom: '6px', padding: '4px', backgroundColor: '#f44336', color: '#fff', borderRadius: '5px' }}>
                <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>ques:-{data[idx].question}</p>
                <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>Correct Answer: {data[idx].correctAns}</p>
              </div>
            ))}
          </div>
          <button
            onClick={handleReset}
            style={{
              padding: '10px 20px',
              marginTop: '20px',
              fontSize: '1.2rem',
              backgroundColor: '#2196F3',
              color: '#fff',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              transition: 'background-color 0.3s ease'
            }}
          >
            Restart Quiz
          </button>
        </>
      )}
    </div>
  );
}

export default Quiz;

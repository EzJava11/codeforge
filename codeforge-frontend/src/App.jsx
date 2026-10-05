import { useState } from 'react'

function App() {

  const questions = [
    {
      question: "¿Qué devuelve Array.prototype.map()?",
      options: [
        "El array original",
        "Un nuevo array",
        "Una Promise",
        "Un objeto"
      ],
      correctAnswer: 1
    },
    {
      question: "¿Qué método de array devuelve un nuevo array con los elementos que cumplen una condición?",
      options: [
        "map()",
        "reduce()",
        "filter()",
        "find()"
      ],
      correctAnswer: 2
    },
    {
      question: "¿Cuál es la diferencia principal entre let y const?",
      options: [
        "let permite reasignación y const no",
        "const permite reasignación y let no",
        "let solo sirve para strings",
        "No existe ninguna diferencia"
      ],
      correctAnswer: 0
    },
    {
      question: "¿Qué devuelve typeof null?",
      options: [
        "null",
        "undefined",
        "object",
        "boolean"
      ],
      correctAnswer: 2
    },
    {
      question: "¿Qué representa una Promise en JavaScript?",
      options: [
        "Un array especial",
        "El resultado de una operación asíncrona futura",
        "Una función que siempre devuelve un string",
        "Un tipo de objeto que solo sirve para HTTP"
      ],
      correctAnswer: 1
    }
  ]

  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)

  return (
    <>
      <h1>CodeForge</h1>
      <br />
      <p>{questions[currentQuestion].question}</p>
      <ul>
        {
          questions[currentQuestion].options.map((option, index) => {
            return <li style={{ listStyleType: 'none' }} key={option}>
              <label>
                <input type="radio" name="answer" onChange={() => {
                  setSelectedAnswer(index)
                }} />
                {option}
              </label>
            </li>
          })
        }
      </ul>
      <p>Respuesta Seleccionada: {selectedAnswer !== null && selectedAnswer + 1}</p>

      <input type="button" value="Anterior" onClick={() => {
        if(currentQuestion !== 0){
          setCurrentQuestion(currentQuestion-1)
          setSelectedAnswer(null)
        }
      }}/>
      
      <input type="button" value="Siguiente" onClick={() => {
        if(currentQuestion < questions.length-1){
          setCurrentQuestion(currentQuestion+1)
          setSelectedAnswer(null)
        }
      }}/>
      
    </>
  )
}

export default App

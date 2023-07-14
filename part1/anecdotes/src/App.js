import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  let copy = [...points]
  
  const handleVote = () => {
    copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const highestPointsIndex = () => {
    let highestIndex = 0
    for (let i = 1; i < points.length; i++) {
      if (points[i] > points[highestIndex]) {
        highestIndex = i
      }
    }
    return highestIndex
  }

  const getRandomIndex = () => {
    setSelected(Math.floor(((Math.random() * anecdotes.length))))
  }

  return (
    <div>
      <div>
        <div>
          {anecdotes[selected]}
          <br></br>
          has {points[selected]} votes
        </div>
        <button onClick={handleVote}>Vote</button>
        <button onClick={getRandomIndex}>Next Anecdote</button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        {anecdotes[highestPointsIndex()]}
        <br></br>
        has {points[highestPointsIndex()]} votes
      </div>
    </div>
  )
}

export default App
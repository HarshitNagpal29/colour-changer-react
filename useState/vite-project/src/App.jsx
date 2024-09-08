import { useState } from 'react'
import './App.css'

function App() {
  const [colour, setColour] = useState('brown')

  return (
    <>
      <div>
        <button onClick={() => setColour('red')}>Red</button>
        <button onClick={() => setColour('green')}>Green</button>
        <button onClick={() => setColour('blue')}>Blue</button>
        <button onClick={() => setColour('black')}>Brown</button>
      </div>
      <div
        style={{
          backgroundColor: colour,
          height: '100vh',
          transition: 'background-color 0.5s ease' // Smooth transition for color change
        }}
      >
      </div>
    </>
  )
}

export default App

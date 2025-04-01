import { useState } from 'react'
import './css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page">
      <h1>Hello World!</h1>
    </div>
  )
}

export default App

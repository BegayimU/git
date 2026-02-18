import './App.css'
import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <h1>Hello</h1>
    </>
  )
}

export default App

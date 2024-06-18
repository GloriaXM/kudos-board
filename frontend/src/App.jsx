import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/mainview/Header'
import NavBar from './components/mainview/NavBar'
import BoardListDisplay from './components/mainview/BoardListDisplay'
import BoardView from './components/boardview/BoardView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <NavBar />
      <BoardListDisplay />
      <BoardView />
    </>
  )
}

export default App

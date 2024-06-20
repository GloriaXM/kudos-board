
import './App.css'
import './components/mainview/MainView'
import { Route, Routes } from 'react-router-dom';
import Header from './components/mainview/Header'
import MainView from './components/mainview/MainView';
import BoardView from './components/boardview/BoardView'
import {BoardViewId} from './components/BoardContext'
import CreateBoard from './components/forms/CreateBoard.jsx'
import CreateCard from './components/forms/CreateCard'
import {useState} from 'react'




function App() {

    const [displayedBoardId, setDisplayedBoardId] = useState(0);
    const displayedBoardIds = [displayedBoardId, setDisplayedBoardId];

  return (
    <div className="app">
      <Header/>
        <BoardViewId.Provider value={displayedBoardIds}>
        <Routes>
          <Route exact path='/' element={<MainView/>}></Route>
          <Route exact path='/boardDetails' element={<BoardView/>}></Route>
          <Route exact path='/createBoard' element={<CreateBoard/>}></Route>
          <Route exact path='/createCard' element={<CreateCard/>}></Route>
        </Routes>
        </BoardViewId.Provider>
    </div>
  )
}

export default App


import './App.css'
import './components/mainview/MainView'
import { Route, Routes } from 'react-router-dom';
import Header from './components/mainview/Header'
import MainView from './components/mainview/MainView';
import BoardView from './components/boardview/BoardView'
import {BoardListContext, BoardViewId, SearchOptionsContext} from './components/BoardContext'
import CreateBoard from './components/forms/CreateBoard.jsx'
import CreateCard from './components/forms/CreateCard'
import {useEffect, useState} from 'react'
import Footer from './components/mainview/Footer'




function App() {

    const [displayedBoardId, setDisplayedBoardId] = useState(0);
    const displayedBoardIds = [displayedBoardId, setDisplayedBoardId];

    const [searchOptions, setSearchOptions] = useState([{}]);
    const searchOptionsValue = [searchOptions, setSearchOptions];

    const [boardList, setBoardList] = useState([{}]);
    const boardListValue = [boardList, setBoardList];

  return (
    <div className="app">
      <Header/>
        <BoardViewId.Provider value={displayedBoardIds}>
        <SearchOptionsContext.Provider value={searchOptionsValue}>
        <BoardListContext.Provider value={boardListValue}>
        <Routes>
          <Route exact path='/' element={<MainView/>}></Route>
          <Route exact path='/boardDetails' element={<BoardView />}></Route>
          <Route exact path='/createBoard' element={<CreateBoard/>}></Route>
          <Route exact path='/createCard' element={<CreateCard/>}></Route>
        </Routes>
        </BoardListContext.Provider>
        </SearchOptionsContext.Provider>
        </BoardViewId.Provider>
      <Footer/>
    </div>
  )
}

export default App

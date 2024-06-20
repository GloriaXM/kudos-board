import { useState, useEffect} from 'react'
import './App.css'
import Header from './components/mainview/Header'
import NavBar from './components/mainview/NavBar'
import BoardListDisplay from './components/mainview/BoardListDisplay'
import BoardView from './components/boardview/BoardView'
import {BoardContext, BoardViewContext, BoardViewId} from './components/BoardContext'

function App() {
  const [boardList, setBoardList] = useState([{}]);
  const [clickedBoardId, setClickedBoardId] = useState(0); //Use this state to keep track of what id we want to call the db with to open view
  const [boardListSortType, setBoardListSortType] = useState('');
  const sortType = [boardListSortType, setBoardListSortType];

  const [displayBoardView, setDisplayBoardView] = useState(false);
  const displayBoardDetails = [displayBoardView, setDisplayBoardView];

  const [displayedBoardId, setDisplayedBoardId] = useState(0);
  const displayedBoardIds = [displayedBoardId, setDisplayedBoardId];

  useEffect(() => {
    async function fetchBoardList() {
      let queryUrl = new URL("http://localhost:5000/board?");
      if (boardListSortType !== ''){
        queryUrl.searchParams.append("type", boardListSortType);
      }
      const response = await fetch(queryUrl);
      const loadedBoards = await response.json();
      setBoardList(loadedBoards)
    }
    fetchBoardList();
  }, [boardListSortType]);

  return (
    <BoardContext.Provider value={sortType} className="app">
      <Header />
      <NavBar />
      <BoardViewContext.Provider value={displayBoardDetails}>
        <BoardViewId.Provider value={displayedBoardIds}>
          <BoardListDisplay boardList={boardList}/>
          <BoardView />
        </BoardViewId.Provider>
      </BoardViewContext.Provider>
    </BoardContext.Provider>
  )
}

export default App

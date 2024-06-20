import { useState, useEffect} from 'react'
import './App.css'
import Header from './components/mainview/Header'
import NavBar from './components/mainview/NavBar'
import BoardListDisplay from './components/mainview/BoardListDisplay'
import BoardView from './components/boardview/BoardView'

function App() {
  const [boardList, setBoardList] = useState([{}]);
  const [clickedBoardId, setClickedBoardId] = useState(0); //Use this state to keep track of what id we want to call the db with to open view
  const [boardListSortType, setBoardListSortType] = useState('');

  useEffect(() => {
    async function fetchBoardList() {
      const response = await await fetch(`http://localhost:5000/board`);
      const loadedBoards = await response.json();
      setBoardList(loadedBoards)
    }
    fetchBoardList();
  }, [boardListSortType]);

  return (
    <div className="app">
      <Header />
      <NavBar />
      <BoardListDisplay boardList={boardList}/>
      <BoardView />
    </div>
  )
}

export default App

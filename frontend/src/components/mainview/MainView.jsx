
import SortBar from './SortBar'
import BoardListDisplay from './BoardListDisplay'
import {BoardContext} from '../BoardContext'
import {useState, useEffect} from 'react'
import BoardCard from './BoardCard';

function MainView({}) {
    const [boardList, setBoardList] = useState([{}]);

    const [boardListSortType, setBoardListSortType] = useState('');
    const sortType = [boardListSortType, setBoardListSortType];

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
    <BoardContext.Provider value={sortType} className="mainView">
        <SortBar />
        <BoardListDisplay boardList={boardList}/>
    </BoardContext.Provider>
    )
}

export default MainView

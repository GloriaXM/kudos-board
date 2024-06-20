
import SortBar from './SortBar'
import BoardListDisplay from './BoardListDisplay'
import {BoardContext} from '../BoardContext'
import {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';

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
          setBoardList(loadedBoards);
        }
        fetchBoardList();
      }, [boardListSortType]);

    useEffect(() => {
        console.log(boardList);
    }, [boardList]);


    return (
        <>
           <NavLink to='/createBoard'>Create New Board</NavLink>
            <BoardContext.Provider value={sortType} className="mainView">
              <SortBar />
              <BoardListDisplay boardList={boardList}/>
            </BoardContext.Provider>
        </>
    )
}

export default MainView


import SortBar from './SortBar'
import BoardListDisplay from './BoardListDisplay'
import {BoardContext, useBoardListContext, BoardSearchContext} from '../BoardContext'
import {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';

function MainView({}) {

    const [boardListSortType, setBoardListSortType] = useState('all');
    const sortType = [boardListSortType, setBoardListSortType];

    const [boardSearchTerm, setBoardSearchTerm] = useState(null);
    const boardSearchValue = [boardSearchTerm, setBoardSearchTerm];

    const [boardList, setBoardList] = useBoardListContext();

    useEffect(() => {
        async function fetchBoardList() {
          let queryUrl = new URL("http://localhost:5000/board");

          if (boardListSortType === "recent") {
            queryUrl = new URL("http://localhost:5000/recent");
          } else if (boardListSortType !== "all"){
            queryUrl.searchParams.append("type", boardListSortType);
          }

          const response = await fetch(queryUrl);
          const loadedBoards = await response.json();
          setBoardList(loadedBoards);
        }
        fetchBoardList();
      }, [boardListSortType]);

    return (
        <>
           <NavLink to='/createBoard'>Create New Board</NavLink>
            <BoardContext.Provider value={sortType} className="mainView">
            <BoardSearchContext.Provider value={boardSearchValue} className="mainView">
              <SortBar />
              <BoardListDisplay boardList={boardList}/>
              </BoardSearchContext.Provider>
            </BoardContext.Provider>
        </>
    )
}

export default MainView

import './SortBar.css'
import SortButton from './SortButton'
import { useBoardSearchContext, useBoardListContext } from '../BoardContext'
import {useState, useEffect} from 'react'

function SortBar() {
  const [boardSearchTerm, setBoardSearchTerm] = useBoardSearchContext();
  const [boardList, setBoardList] = useBoardListContext();

  useEffect(() => {
    async function fetchSearchedBoards() {
      let queryUrl;
      if (boardSearchTerm === null || boardSearchTerm === ""){
        queryUrl = new URL(`http://localhost:5000/board`);
      } else {
        queryUrl = new URL(`http://localhost:5000/board/search/${boardSearchTerm}`);
      }
      const response = await fetch(queryUrl);
      const loadedBoards = await response.json();
      console.log("LOADED BOARDS")
      console.log(loadedBoards)
      setBoardList(loadedBoards);
    }
    fetchSearchedBoards();
  }, [boardSearchTerm]);

  return (
    <div className="navBar">
      <input type="text" id="boardSearchBar" placeholder="Search for a  board"
      onChange={(e) => {setBoardSearchTerm(e.target.value)}}
      ></input>
      <SortButton sortType="all"/>
      <SortButton sortType="recent"/>
      <SortButton sortType="congratulations"/>
      <SortButton sortType="thanks"/>
      <SortButton sortType="inspiration"/>
    </div>
  )
}

export default SortBar

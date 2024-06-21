import './SortBar.css'
import SortButton from './SortButton'
import { useBoardSearchContext, useBoardListContext } from '../BoardContext'
import {useState, useEffect} from 'react'

function SortBar() {
  const [boardSearchTerm, setBoardSearchTerm] = useBoardSearchContext();
  const [boardList, setBoardList] = useBoardListContext();
  const RECENTS_FILTER = 60*60*1000;

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

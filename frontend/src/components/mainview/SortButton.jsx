// import './Sor.css'
import { useContext } from 'react';
import { BoardContext, useBoardContext } from '../BoardContext';

function SortButton({sortType}) {
  const [boardListSortType, setBoardListSortType] = useBoardContext();

  return (
      <button className={sortType} onClick={() => {
        setBoardListSortType(sortType);
        console.log(sortType);
        }}> {sortType}</button>
  )
}

export default SortButton

import { useBoardContext } from '../BoardContext';

function SortButton({sortType}) {
  const [boardListSortType, setBoardListSortType] = useBoardContext();

  return (
      <button className={sortType} onClick={() => {
        setBoardListSortType(sortType);
        }}> {sortType}</button>
  )
}

export default SortButton

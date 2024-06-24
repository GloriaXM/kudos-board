import BoardCard from './BoardCard'
import './BoardListDisplay.css'

function BoardListDisplay({boardList}) {

  return (
    <div className="boardList">
      {boardList.map(board => (
          <BoardCard key={board.id} id={board.id} title={board.boardName} imgSrc={board.imageSrc} type={board.boardType}
          onClick={() => {setCurrBoard(board.id)}}/>
          ))}
    </div>
  )
}

export default BoardListDisplay

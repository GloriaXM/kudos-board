import BoardCard from './BoardCard'
import {useState, useEffect} from 'react'

function BoardListDisplay({boardList}) {



  return (
    <div className="boardList">
      <BoardCard/>
      {boardList.map(board => (
          <BoardCard key={board.id} id={board.id} title={board.boardName} imgSrc={board.imgSrc} type={board.boardType}
          onClick={() => {setCurrBoard(board.id)}}/>
          ))}
    </div>
  )
}

export default BoardListDisplay

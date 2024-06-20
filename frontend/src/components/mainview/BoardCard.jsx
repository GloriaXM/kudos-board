import './BoardCard.css'
import { useContext } from 'react';
import { BoardContext, useMyContext } from '../BoardContext';


function BoardCard({id, title, imgSrc, type}) {
    const [boardListSortType, setBoardListSortType] = useMyContext();

    return (
        <div id={id} className="boardCard" onClick={() => {
            setBoardListSortType(type);
            console.log(type);
            }}>
        <h2> Title: {title}</h2>
        <img className="boardCardImg" src={imgSrc} alt="Board thumbnail"/>
        <h3> Type: {type} </h3>
        <button className="viewBoardButton"> View </button>
        <button className="deleteBoardButton"> Delete </button>
        </div>
    )
}

export default BoardCard

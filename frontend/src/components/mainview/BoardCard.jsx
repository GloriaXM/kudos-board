import './BoardCard.css'
import { useContext } from 'react';
import { LevelContext } from '../LevelContext.js';


function BoardCard({id, title, imgSrc, type}) {


    return (
        <div id={id} className="boardCard">
        <h2> Title: {title}</h2>
        <img className="boardCardImg" src={imgSrc} alt="Board thumbnail"/>
        <h3> Type: {type} </h3>
        <button className="viewBoardButton"> View </button>
        <button className="deleteBoardButton"> Delete </button>
        </div>
    )
}

export default BoardCard

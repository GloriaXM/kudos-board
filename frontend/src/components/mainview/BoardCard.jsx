import './BoardCard.css'
import { useBoardViewId, useBoardListContext } from '../BoardContext';
import { NavLink } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


function BoardCard({id, title, imgSrc, type}) {
    const [displayedBoardId, setDisplayedBoardId] = useBoardViewId();
    const [displayDeleteModal, setDisplayDeleteModal] = useState(false);
    const [boardList, setBoardList] = useBoardListContext();
    const navigate = useNavigate();

    const handleBoardClick = () => {
        setDisplayedBoardId(id);
    }

    function onDeleteClick (){
        setDisplayDeleteModal(true);
    }

    function handleDeleteBoard(e){

        setDisplayDeleteModal(false);
        let queryUrl = new URL(`http://localhost:5000/board/${displayedBoardId}`);
        console.log(queryUrl)
        fetch(queryUrl, {
            method: "DELETE",
            body: JSON.stringify({
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
            });
        console.log("node")
        console.log(boardList)
        setBoardList(boardList.filter(function(board) {
            return board.id != e.target.parentNode.parentNode.parentNode.id;
        }))
        navigate('/');
    }

    return (
        <div id={id} className="boardCard" onClick={handleBoardClick} >
            <h2> Title: {title}</h2>
            <img className="boardCardImg" src={imgSrc} alt="board image"/>
            <h3> Type: {type} </h3>
            <NavLink className="viewButton" to='/boardDetails'>View</NavLink>
            <button className="deleteBoardButton" onClick={onDeleteClick}> Delete </button>
            <div className="deleteModal" style={{display: displayDeleteModal ? 'block' : 'none' }}>
                <div className="deleteModalContent">
                    <p> Are you sure?</p>
                    <button className="cancelDelete" onClick={() => {setDisplayDeleteModal(false)}}>No, Cancel</button>
                    <button className="confirmDelete" onClick={handleDeleteBoard}>Yes, Delete</button>
                </div>
            </div>
        </div>
    )
}

export default BoardCard

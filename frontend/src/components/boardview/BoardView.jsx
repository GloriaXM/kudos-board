import { useBoardViewContext, useBoardViewId } from '../BoardContext';
import {useState, useEffect} from 'react';

function BoardView() {
  const [displayBoardView, setDisplayBoardView] = useBoardViewContext();
  const [displayedBoardId, setDisplayedBoardId] = useBoardViewId();

  const [boardTitle, setBoardTitle] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [description, setDescription] = useState('');
  const [upvotes, setUpvotes] = useState(0);

  useEffect(() => {
    async function fetchBoardDetails() {
      let queryUrl = new URL(`http://localhost:5000/board/${displayedBoardId}`);
      const response = await fetch(queryUrl);
      const loadedBoard = await response.json();
      setBoardTitle(loadedBoard.boardName);
    }
    fetchBoardDetails();
  }, [displayedBoardId]);

    return (
      <div className="boardView" style={{
        visibility: displayBoardView ? "visible" : "hidden",
      }}>
        <button className="closeBoardDisplay" onClick={() => {setDisplayBoardView(false)}}>Close</button>
        <h2> Title: {boardTitle} </h2>
        <img src={imageSrc}/>
        <p> Description: {description}</p>
        <button className="upvoteButton"> Upvote: {upvotes}</button>
        <button className="deleteButton"> Delete {upvotes}</button>
      </div>
    )
  }

export default BoardView

import { useBoardViewId, CardListContext } from '../BoardContext';
import {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import CardList from './CardList'


function BoardView({boardName}) {
  const [displayedBoardId, setDisplayedBoardId] = useBoardViewId();

  const [cardList, setCardList] = useState([{}]);
  const cardListValue = [cardList, setCardList];
  const [boardDetails, setBoardDetails] = useState(null);

  useEffect(() => {
    async function fetchBoardCards() {
      const queryUrl = new URL(`http://localhost:5000/board/cards/${displayedBoardId}`);
      const response = await fetch(queryUrl);
      const loadedCards = await response.json();
      setCardList(loadedCards);
    }
    async function fetchBoardDetails() {
      const queryUrl = new URL(`http://localhost:5000/board/${displayedBoardId}`);
      const response = await fetch(queryUrl);
      const loadedDetails = await response.json();
      setBoardDetails(loadedDetails);
    }
    fetchBoardCards();
    fetchBoardDetails();
  }, [displayedBoardId]);

    return (
      <div className="boardView" >
        <div className="boardViewList">
        <button> <NavLink to='/'>Back</NavLink></button>
        <h2> {(boardDetails === null) ? "Untitled" : boardDetails.boardName} </h2>
        <img className="" src={(boardDetails === null) ? "" : boardDetails.imageSrc}/>
        <p> {(boardDetails === null) ? "No Description" : boardDetails.description}</p>
        </div>
        <NavLink to='/createCard'>Create New Card</NavLink>
        <CardListContext.Provider value={cardListValue}>
          <CardList cardList={cardList}/>
        </CardListContext.Provider>
      </div>
    )
  }

export default BoardView

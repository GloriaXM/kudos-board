import { useBoardViewId, } from '../BoardContext';
import {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import CardList from './CardList'


function BoardView({boardName}) {
  const [displayedBoardId, setDisplayedBoardId] = useBoardViewId();

  const [imageSrc, setImageSrc] = useState('');
  const [description, setDescription] = useState('');
  const [upvotes, setUpvotes] = useState(0);

  const [cardList, setCardList] = useState([{}]);

  useEffect(() => {
    async function fetchBoardDetails() {
      let queryUrl = new URL(`http://localhost:5000/board/cards/${displayedBoardId}`);
      const response = await fetch(queryUrl);
      const loadedCards = await response.json();
      setCardList(loadedCards);
    }
    fetchBoardDetails();
  }, [displayedBoardId]);

  useEffect(() => {
    console.log(cardList)
  }, [cardList]);

    return (
      <div className="boardView" >
        <div className="boardViewList">
        <button> <NavLink to='/'>Back</NavLink></button>
        <h2> Title: {displayedBoardId} </h2>
        <img className="" src={imageSrc}/>
        <p> Description: {description}</p>
        </div>
        <NavLink to='/createCard'>Create New Card</NavLink>
        <CardList cardList={cardList}/>
      </div>
    )
  }

export default BoardView

import {useState, useEffect} from 'react'
import { useCardListContext } from '../BoardContext';
import './SingleCard.css'

function SingleCard(card) {
  const [upvotes, setUpvotes] = useState(card.upvotes);
  const [clickedBefore, setClickedBefore] = useState(false);
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false);
  const [cardList, setCardList] = useCardListContext();

  const handleCardClick = (e) => {
    card.setCurrCardId(e.target.id);
}

  async function handleUpvoteClick(){
    if (clickedBefore){
      setUpvotes(upvotes - 1);
    } else {
      setUpvotes(upvotes + 1);
    }
    setClickedBefore(!clickedBefore);
  }

  function onDeleteClick (){
    setDisplayDeleteModal(true);
  }

  function handleDeleteCard(e){

    setDisplayDeleteModal(false);
    let queryUrl = new URL(`http://localhost:5000/card/${card.id}`);
    fetch(queryUrl, {
        method: "DELETE",
        body: JSON.stringify({
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        });

    setCardList(cardList.filter(function(card) {
        return card.id != e.target.id;
    }))
}

  return (
    <div className="singleCard" onClick={handleCardClick}>
        <h2>  {card.title}</h2>
        <h3 defaultValue="Anonymous"> {card.author}</h3>
        <img className="cardGif" src={card.gifSrc}></img>
        <p> Note: {card.note}</p>
        <button onClick={handleUpvoteClick}> Upvote: {upvotes}</button>
        <button className="deleteCardButton" onClick={onDeleteClick}> Delete </button>
            <div className="deleteCard" style={{display: displayDeleteModal ? 'block' : 'none' }}>
                <div className="deleteCardContent">
                    <p> Are you sure?</p>
                    <button className="cancelDelete" onClick={() => {setDisplayDeleteModal(false)}}>No, Cancel</button>
                    <button id={card.id} className="confirmDelete" onClick={handleDeleteCard}>Yes, Delete</button>
                </div>
            </div>
    </div>
  )
}

export default SingleCard

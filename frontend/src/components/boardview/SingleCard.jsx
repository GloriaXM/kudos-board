import {useState, useEffect} from 'react'
import { useCardListContext } from '../BoardContext';

function SingleCard(card) {
  const [upvotes, setUpvotes] = useState(card.upvotes);
  const [clickedBefore, setClickedBefore] = useState(false);
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false);
  // const [currCardId, setCurrCardId] = useState(0);
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
    console.log(queryUrl)
    fetch(queryUrl, {
        method: "DELETE",
        body: JSON.stringify({
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        });

    setCardList(cardList.filter(function(card) {
        console.log(card.id)
        console.log(e.target.parentNode.parentNode.parentNode.id)
        return card.id != e.target.id;
    }))
}

  return (
    <div className="singleCard" onClick={handleCardClick}>
        <h2> Card Title: {card.title}</h2>
        <h3> Author: {card.author}</h3>
        <img src={card.gifSrc}></img>
        <p> Note: {card.note}</p>
        <button onClick={handleUpvoteClick}> Upvote: {upvotes}</button>
        <button className="deleteCardButton" onClick={onDeleteClick}> Delete </button>
            <div className="deleteCard" style={{visibility: displayDeleteModal ? 'visible' : 'hidden' }}>
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

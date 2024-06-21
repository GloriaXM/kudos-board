import {useState, useEffect} from 'react'

function SingleCard(card) {
  const [upvotes, setUpvotes] = useState(card.upvotes);
  const [clickedBefore, setClickedBefore] = useState(false);

  async function handleUpvoteClick(){
    if (clickedBefore){
      setUpvotes(upvotes - 1);
    } else {
      setUpvotes(upvotes + 1);
    }
    setClickedBefore(!clickedBefore);
  }

  return (
    <div className="singleCard">
        <h2> Card Title: {card.title}</h2>
        <h3> Author: {card.author}</h3>
        <img src={card.gifSrc}></img>
        <p> Note: {card.note}</p>
        <button onClick={handleUpvoteClick}> Upvote: {upvotes}</button>

    </div>
  )
}

export default SingleCard

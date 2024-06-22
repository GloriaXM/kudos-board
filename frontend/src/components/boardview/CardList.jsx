import SingleCard from './SingleCard'
import {useState, useEffect} from 'react'
import './CardList.css'

function CardList({cardList}) {
  const [currCardId, setCurrCardID] = useState(0)

  return (
    <div className="cardList">
        {cardList.map(card => (
          <SingleCard key={card.id} id={card.id} title={card.title} note={card.note}
          author={card.author} gifSrc={card.gifSrc} upvotes={card.upvotes}
          setCurrCardId={setCurrCardID}
          />
          ))}
    </div>
  )
}

export default CardList

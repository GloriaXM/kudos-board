import SingleCard from './SingleCard'

function CardList({cardList}) {


  return (
    <div className="cardList">
        {cardList.map(card => (
          <SingleCard key={card.id} id={card.id} title={card.title} note={card.note}
          author={card.author} gifSrc={card.gifSrc} upvotes={card.upvotes}
          />
          ))}
    </div>
  )
}

export default CardList

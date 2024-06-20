

function SingleCard(card) {


  return (
    <div className="singleCard">
        <h2> Card Title: {card.title}</h2>
        <h3> Author: {card.author}</h3>
        <img src={card.gifSrc}></img>
        <p> Note: {card.note}</p>
        <button> Upvote: {card.upvotes}</button>

    </div>
  )
}

export default SingleCard

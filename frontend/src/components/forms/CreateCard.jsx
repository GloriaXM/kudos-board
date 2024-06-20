import { NavLink } from 'react-router-dom';
import { useBoardViewId } from '../BoardContext';
import { useNavigate } from 'react-router-dom';

function CreateCard() {
  const [displayedBoardId, setDisplayedBoardId] = useBoardViewId();
  const navigate = useNavigate();

  async function postNewCard(e) {
    e.preventDefault();
    const apiKey = import.meta.env.VITE_GIPHY_API_KEY;


    let queryUrl = new URL(`http://localhost:5000/board/card`);
    fetch(queryUrl, {
        method: "POST",
        body: JSON.stringify({
            title: document.getElementById('inputTitle').value,
            note: document.getElementById('inputNote').value,
            author: document.getElementById('inputAuthor').value,
            gifSrc: document.getElementById('inputGifSrc').value,
            upvotes: 0,
            boardId: displayedBoardId
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    navigate('/boardDetails');

}

  return (
    <>
    <button> <NavLink to='/'>Back</NavLink></button>
    <form id="createCardForm" className="createCardForm" onSubmit={postNewCard}>

        <h2>Create a New Card</h2>
        <label htmlFor="title">Title:</label>
        <input type="text" id="inputTitle" name="title" defaultValue="Untitled"/>

        <label htmlFor="note">Note:</label>
        <input type="text" id="inputNote" name="note"/>

        <label htmlFor="author">Author (optional):</label>
        <input type="text" id="inputAuthor" name="author"/>

        <label htmlFor="gifSrc">Search Gif:</label>
        <input type="text" id="inputGifSrc" name="gifSrc"/>

        <button type="submit" id="createBoardButton"> Create</button>


    </form>
    </>
  )
}

export default CreateCard;

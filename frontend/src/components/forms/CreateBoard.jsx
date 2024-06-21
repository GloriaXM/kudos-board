import './CreateBoard.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CreateBoard() {
    const navigate = useNavigate();

    async function postNewBoard(e) {
        e.preventDefault();
        const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

        const imageRequest = await fetch(`http://api.giphy.com/v1/stickers/random/?api_key=${apiKey}`);
        const result = await imageRequest.json();
        const resultGifSrc = result.data.images.downsized_medium.url;

        let queryUrl = new URL(`http://localhost:5000/board`);
        fetch(queryUrl, {
            method: "POST",
            body: JSON.stringify({
                imagesrc: resultGifSrc,
                boardname: document.getElementById('inputTitle').value,
                boardtype: document.getElementById('inputType').value,
                description: document.getElementById('inputDescription').value
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
        navigate('/');
    }


  return (
    <>
    <button> <NavLink to='/'>Back</NavLink></button>
    <form id="createBoardForm" className="createBoardForm" onSubmit={postNewBoard}>

        <h2>Create a New Board</h2>
        <label htmlFor="title">Title:</label>
        <input type="text" id="inputTitle" name="title" defaultValue="Untitled"/>

        <label htmlFor="description">Description:</label>
        <input type="text" id="inputDescription" name="description"/>

        <label htmlFor="author">Author (optional):</label>
        <input type="text" id="inputAuthor" name="author"/>

        <label htmlFor="type">Type:</label>
        <input type="text" id="inputType" name="type"/>

        <button type="submit" id="createBoardButton"> Create</button>


    </form>
    </>
  )
}

export default CreateBoard

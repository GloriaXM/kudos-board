import './CreateBoard.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { InputLabel, Select, MenuItem } from '@material-ui/core';
import {useEffect, useState} from 'react'

function CreateBoard() {
    const navigate = useNavigate();
    const [boardType, setBoardType] = useState('');

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
                boardtype: boardType,
                description: document.getElementById('inputDescription').value,
                createdAt: Date.now()
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
            })
            .then((response) => response.json());
        navigate('/');
    }

    const handleChange = (event) => {
        setBoardType(event.target.value);
      };

      useEffect(() => {console.log(boardType)})

  return (
    <div className="createBoardForm">
    <button> <NavLink to='/'>Back</NavLink></button>
    <form id="createBoardForm" className="createBoardForm" onSubmit={postNewBoard}>

        <h2>Create a New Board</h2>
        <label htmlFor="title">Title:</label>
        <input type="text" id="inputTitle" name="title" defaultValue="Untitled"/>

        <label htmlFor="description">Description:</label>
        <input type="text" id="inputDescription" name="description"/>

        <label htmlFor="author">Author (optional):</label>
        <input type="text" id="inputAuthor" name="author"/>

        <InputLabel className="inputType">Select Board Type</InputLabel>
        <Select
            className="inputTypeSelect"
            value={boardType}
            label="type"
            onChange={handleChange}
        >
            <MenuItem value={"congratulations"}>Congratulations</MenuItem>
            <MenuItem value={"thanks"}>Thanks</MenuItem>
            <MenuItem value={"inspiration"}>Inspiration</MenuItem>
        </Select>

        <button type="submit" className="createBoardButton"> Create</button>
    </form>
    </div>
  )
}

export default CreateBoard

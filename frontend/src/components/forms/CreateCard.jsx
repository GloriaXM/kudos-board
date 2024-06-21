import { NavLink } from 'react-router-dom';
import { useBoardViewId, useSearchOptionsContext } from '../BoardContext';
import { useNavigate } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import SearchOption from './SearchOption'
import {useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';

function CreateCard() {
  const [displayedBoardId, setDisplayedBoardId] = useBoardViewId();
  const [searchOptions, setSearchOptions] = useSearchOptionsContext();
  const navigate = useNavigate();
  const [currGif, setCurrGif] = useState('');

  async function postNewCard(e) {
    e.preventDefault();

    let queryUrl = new URL(`http://localhost:5000/board/card`);
    fetch(queryUrl, {
        method: "POST",
        body: JSON.stringify({
            title: document.getElementById('inputTitle').value,
            note: document.getElementById('inputNote').value,
            author: document.getElementById('inputAuthor').value,
            gifSrc: document.getElementById('inputGifSrc').value,
            upvotes: 0,
            boardId: displayedBoardId,

        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then((response) => response.json());
    navigate('/boardDetails');

  }

  async function handleSearchChange(e, value){
    const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
    const searchTerm = value;

    let queryUrl = new URL(`http://api.giphy.com/v1/gifs/search?limit=7&api_key=${apiKey}`);
    queryUrl.searchParams.append("q", searchTerm);
    console.log("quaryUrl");
    console.log(queryUrl)
    const gifRequest = await fetch(queryUrl);
    const result = await gifRequest.json();
    console.log(result.data);

    setSearchOptions(result.data);

  }

  useState(() => {
    console.log("search options")
    console.log(searchOptions);
  }, [searchOptions])

  function displaySearchedImg (e, value) {
    console.log("value")
    console.log(value)

    console.log("e target")
    // setCurrGif()

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

        {/* <label htmlFor="gifSrc">Search Gif:</label>
        <input type="text" id="inputGifSrc" name="gifSrc" onChange={handleSearchChange}/> */}


      <Autocomplete
        id="gifSearchBar"
        freeSolo
        onInputChange={handleSearchChange}
        onChange={displaySearchedImg}
        options={searchOptions.map((option) => option.title)}
        getOptionLabel={(option) => {
          console.log(option)
          if(searchOptions.length === 1){
            console.log("option is null")
            //TODO: find a way to populate autocomplete with popular picks when empty
            return ""
          } else {
            console.log("option is not null")
            return option
          }
          }}
        renderInput={(params) => <TextField {...params} label="Search for a GIF"

        />
      }
      />

        <button type="submit" id="createBoardButton"> Create</button>




    </form>
    </>
  )
}

export default CreateCard;

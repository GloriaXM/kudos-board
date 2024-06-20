import './BoardCard.css'
import { useBoardViewId } from '../BoardContext';
import { NavLink } from 'react-router-dom';

function BoardCard({id, title, imgSrc, type}) {
    const [displayedBoardId, setDisplayedBoardId] = useBoardViewId();

    const handleBoardClick = () => {
        setDisplayedBoardId(id);
    }

    console.log("imgsrc", imgSrc)

    return (
        <div id={id} className="boardCard" onClick={handleBoardClick} >
            <h2> Title: {title}</h2>
            <img className="boardCardImg" src={imgSrc} alt={imgSrc}/>
            <h3> Type: {type} </h3>
            <NavLink to='/boardDetails'>View</NavLink>
            <button className="deleteBoardButton"> Delete </button>
        </div>
    )
}

export default BoardCard

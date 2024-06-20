import './BoardCard.css'
import { useBoardViewContext, useBoardViewId } from '../BoardContext';

function BoardCard({id, title, imgSrc, type}) {
    const [displayBoardView, setDisplayBoardView] = useBoardViewContext();
    const [displayedBoardId, setDisplayedBoardId] = useBoardViewId();

    const handleBoardClick = () => {
        setDisplayBoardView(true);
        setDisplayedBoardId(id);
        console.log(id);
    }

    return (
        <div id={id} className="boardCard" onClick={handleBoardClick} >
        <h2> Title: {title}</h2>
        <img className="boardCardImg" src={imgSrc} alt="Board thumbnail"/>
        <h3> Type: {type} </h3>
        <button className="viewBoardButton"> View </button>
        <button className="deleteBoardButton"> Delete </button>
        </div>
    )
}

export default BoardCard

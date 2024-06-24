import './CardComments.css'
import Comment from './Comment.jsx'

function CardComments ({show, setShow, cardId, commentList, setCommentList}) {

    function closeModal(){
        setShow(false);
    }

    async function addComment(e) {
        e.preventDefault();
        const newComment = document.getElementById("comment").value

        let queryUrl = new URL(`http://localhost:5000/card/comments/${cardId}`);
        fetch(queryUrl, {
            method: "PATCH",
            body: JSON.stringify({
                newComment: newComment,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        setCommentList(prevCommentList => [...prevCommentList, newComment]);
        document.getElementById("comment").value = "";
    }

    return(
        <div className="commentsModalOverlay" style={{display: show ? 'block' : 'none' }}>
            <div className="commentsModalContent">

            <button className="modal-close-button" onClick={closeModal}>x</button>
            <form onSubmit={addComment}>
                <input id="comment" className='commentBox' type="text" placeholder='Comment' />
            </form>
                    {commentList.map((comment, index) => (
                        <Comment key={index} comment={comment}/>
                    ))}
            </div>
        </div>
    )
}

export default CardComments

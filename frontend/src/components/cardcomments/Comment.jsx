function Comment ({comment}) {

    //TODO: add more information like author, time by expanding comments into a related table
    return(
        <div className="comment">
            <p> {comment}</p>
        </div>
    )
}

export default Comment

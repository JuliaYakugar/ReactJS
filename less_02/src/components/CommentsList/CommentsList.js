import React, { useState } from 'react';

function CommentsList() {

    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const deleteComment = (id) => {
        setComments((prevComments) => prevComments.filter(comment => comment.id !== id));
    };

    return (
        <>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <span>{comment.text}</span>
                    <button onClick={() => deleteComment(comment.id)}>Удалить</button>
                </div>
            ))}
        </>
    )
}

export default CommentsList;

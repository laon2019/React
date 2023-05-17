import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이인제",
        comment: "안뇽1",
    },
    {
        name: "라온",
        comment: "안뇽2",
    },
    {
        name: "송이",
        comment: "안뇽3",
    },
]

function CommentList(props){
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                )
            })}
        </div>
    );
}
export default CommentList;
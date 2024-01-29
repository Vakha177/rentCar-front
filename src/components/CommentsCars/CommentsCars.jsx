import React, { useEffect, useState } from 'react';
import { addComment, fetchComment } from '../../features/commentsSlice';
import { useDispatch, useSelector } from 'react-redux';
import style from './Comments.module.css';
import { useParams } from "react-router-dom";

export default function CommentsCars() {
    const [text, setText] = useState("");
    const { id } = useParams();
    const dispatch = useDispatch();

    const handleAddComment = (e) => {
        e.preventDefault();
        dispatch(addComment({ text, CartId: id }));
    };

    useEffect(() => {
        dispatch(fetchComment(id));
    }, [dispatch]);

    const comments = useSelector((state) => state.comments.comments);

    return (
        <div>
            <div className={style.wrapper}>
                <input  
                    className={style.input}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    placeholder="Ваш отзыв" 
                />
                <button className={style.btnAddComm} onClick={(e) => handleAddComment(e)}>
                    Отправить
                </button>
            </div>
            
            <div className={style.wrapperComments}>
                <h1 className={style.otziv}>Отзывы: {comments.length}</h1>
                <br />
                <div>
                    {comments.map((item) => (
                        <div key={item._id} className="comment-container">
                            <h4 className={style.userId}>{item.CartsId}</h4>
                            <h3 className={style.commentText}>{item.comment}</h3>
                            <br />
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

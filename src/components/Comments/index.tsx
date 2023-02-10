import React from "react";
import { Link } from "react-router-dom";

import { CommentsContainer} from "./styles";
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { CommentsTypes } from "../../types";

export const Comments = ({
    id,
    userImg, 
    userName, 
    postDate, 
    textComment  
}: CommentsTypes) => {
    return (
        <CommentsContainer>
            <div className="comment-box">
                <div className="comment-headline">
                    <div className="user-comment-headline-info">
                        <Link to={`/membros/${id - 1}`}><img src={userImg} alt="User Post Img" /></Link>
                        <span className="post-user-data">
                            <Link to={`/membros/${id - 1}`}><span>{userName}</span></Link>
                            <span><CheckIcon className="user-check-icon" /></span>
                        </span>
                    </div>
                    <div className="comment-date">
                        <AccessTimeIcon className="acess-time-icon" />
                        <span>{postDate}</span>
                    </div>
                </div>
                <div className="comment-text">
                    <p>{textComment}</p>
                </div>
            </div>
        </CommentsContainer>
    );
}
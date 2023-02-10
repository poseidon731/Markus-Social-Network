import React from "react";
import { Link } from "react-router-dom";

import CheckIcon from '@mui/icons-material/Check';
import { HeadlineMembersInfo } from "../WidgetUserInfo";
import { MembersInfoTypes } from "../../types";

export const MembersInfo = ({id, name, image_profile, notDisplay, postDate, hasNick, nickname}: MembersInfoTypes) => {
    return (
        <HeadlineMembersInfo>
            <Link to={`/membros/${id - 1}`}>
                <div className="user-headline-image">
                    <img src={image_profile} alt={name} />
                </div>
            </Link>
            <div className="user-headline-info">
                <div className="first-headline">
                    <p>
                        <span className="user-name">
                            <Link to={`/membros/${id - 1}`}>{name} <span className="icon">{!notDisplay && <CheckIcon className="user-check-icon" />}</span></Link>
                        </span>
                    </p>
                </div>
                <div className="second-headline">
                    {hasNick ?
                    <span className="nickname">{nickname}</span> 
                    :
                    <span className="activity-year">{postDate}</span>
                    }
                </div>
            </div>
        </HeadlineMembersInfo> 
    );
}
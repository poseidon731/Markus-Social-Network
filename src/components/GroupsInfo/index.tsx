import React from "react";
import { Link } from "react-router-dom";

import { HeadlineGroupInfo } from "./styles";

import PublicIcon from '@mui/icons-material/Public';
import { GroupsInfoTypes } from "../../types";

export const GroupsInfo = ({
    image_group, 
    group_name, 
    status_group
}: GroupsInfoTypes) => {
    return (
        <HeadlineGroupInfo>
            <Link to="/grupos">
                <div className="group-headline-image">
                    <img src={image_group} alt="Image Group" />
                </div>
            </Link>
            <div className="group-headline-info">
                <div className="first-headline">
                    <p>
                        <span className="group-name">
                            <Link to="/grupos">{group_name}</Link>
                        </span>
                    </p>
                </div>
                <div className="second-headline">
                    <PublicIcon /> <span className="status-group">{status_group}</span> 
                </div>
            </div>
        </HeadlineGroupInfo> 
    );
}
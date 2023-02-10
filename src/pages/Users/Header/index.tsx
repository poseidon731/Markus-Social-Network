import React, { useState, useEffect } from "react";
import { HeaderInfo, UserData, UserHeader, UserInfo, UserProfileImage } from "../styles";

import { FaStar} from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { FcApproval } from "react-icons/fc";
import { useParams } from "react-router-dom";
import axios from "axios";

const Header = () => {

    const { id }: any = useParams();

    const [ headerData, setHeaderData ] = useState<any>([]);
    const [ headerImage, setHeaderImage ] = useState<any>([]);
    const [ headerClassification, setHeaderClassification ] = useState<any>([])

    const url = "/fake_API/db.json";

    const getHeaderData = async () => {
        const response = await axios.get(url);
        const data = response.data.users;
        setHeaderData(data[id])
        setHeaderImage(data[id].images)
        setHeaderClassification(data[id].classification)
    }

    useEffect(() => {
        getHeaderData();
    }, [])

    return (
        <UserHeader coverHeader={headerImage.cover}>
            <div className="user-header-mask"></div>
            <HeaderInfo>
                <UserData>
                    <UserProfileImage>
                        <img src={headerImage.profile} alt={headerData.name} />
                    </UserProfileImage>
                    <UserInfo>
                        <div className="name">
                            <h2>{headerData.name}</h2>
                            <h2>{headerData.name}</h2>
                            <span>
                            <FcApproval size="24" />
                            </span>
                        </div>
                        <div className="user-meta">
                            <div className="user-meta-left">
                            <ImLocation size="16" /><span>{headerData.address}</span>
                            </div>
                            <div className="user-meta-right">
                            <span>
                                <FaStar color="var(--main-yellow)" size="18" />
                                <FaStar color="var(--main-yellow)" size="18" />
                                <FaStar color="var(--main-yellow)" size="18" />
                                <FaStar color="var(--main-yellow)" size="18" />
                                <FaStar size="18" />
                            </span>
                            <span className="bullet-separator first-bullet">•</span>
                            <div className="ratings-info">
                                <span>{headerClassification.rating} de 5</span>
                                <span className="bullet-separator">•</span>
                                <span>{headerClassification.totalRatings} classificações</span>
                            </div>
                            </div>
                        </div>
                    </UserInfo>
                </UserData>
            </HeaderInfo>
        </UserHeader>
    )
}

export default Header;
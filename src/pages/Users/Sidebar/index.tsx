import React, { useEffect, useState } from "react";
import { Sidebar, WidgetTitle } from "../../../components/Sidebar";

import PersonIcon from '@mui/icons-material/Person';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import CheckIcon from '@mui/icons-material/Check';

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import { UserFriendsContent, UserSidebar, UserSidebarContent } from "../styles";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GroupsInfo } from "../../../components/GroupsInfo";
import Contacts from "../Contacts";

const SidebarUser = () => {

    const { id }: any = useParams();

    const [ sidebar, setSidebar ] = useState<any>([]);
    const [ imageSidebar, setImageSidebar ] = useState<any>([])
    const [ friends, setFriens ] = useState<any>([])
    const [ groupsSidebar, setGroupsSidebar ] = useState([])

    const url = "/fake_API/db.json";

    const getSidebarData = async () => {
        const response = await axios.get(url)
        const data = response.data.users

        setSidebar(data[id])
        setImageSidebar(data[id].images.profile)
        setFriens(data[id].friendship)
        setGroupsSidebar(data[id].activeGroups)
    }

    useEffect(() => {   
        getSidebarData();
    }, [])

    return (
        <UserSidebar>
            <Sidebar>
                <WidgetTitle><PersonIcon /> <span>Sobre mim</span></WidgetTitle>
                    <UserSidebarContent>
                        <div className="aboutme-user-image">
                            <img src={imageSidebar} alt={sidebar.name} />
                        </div>
                        <h2 className="aboutme-username">{sidebar.name}</h2>
                        <p className="aboutme-user-job">{sidebar.job}</p>
                        <div className="divider"></div>
                        <p className="aboutme-description">{sidebar.textAbout}</p>
                    </UserSidebarContent>
            </Sidebar>
            <Sidebar>
                <WidgetTitle><MultipleStopIcon /> <span>Redes Sociais</span></WidgetTitle>
                <UserSidebarContent>
                    <div className="social-media-boxes">
                        <div className="facebook-box">
                            <FaFacebookF size="18" /> <span>Facebook</span>
                        </div>
                        <div className="twitter-box">
                            <FaTwitter size="18" /> <span>Twitter</span>
                        </div>
                        <div className="instagram-box">
                            <FaInstagram size="18" /> <span>Instagram</span>
                        </div>
                    </div>
                </UserSidebarContent>
            </Sidebar>
            <Sidebar>
                <WidgetTitle><PeopleOutlineIcon /> <span>Amigos</span></WidgetTitle>
                <UserSidebarContent>
                    {friends.map((item: any) => (
                        <UserFriendsContent key={item.name}>
                            <a href={item.url}>
                                <div className="user-headline-image">
                                    <img src={item.imageProfile} alt={item.name} />
                                </div>
                            </a>
                            <div className="user-headline-info">
                                <div className="first-headline">
                                    <p>
                                        <span className="user-name">
                                            <a href={item.url}>
                                                {item.name} 
                                                <span className="icon"><CheckIcon className="user-check-icon" /></span>
                                            </a>
                                        </span>
                                    </p>
                                </div>
                                <div className="second-headline">
                                    <span className="nickname">{item.nickname}</span> 
                                </div>
                            </div>
                        </UserFriendsContent>
                    ))}
                </UserSidebarContent>
            </Sidebar>
            <Sidebar>
                <WidgetTitle><GroupsIcon /> <span>Grupos</span></WidgetTitle>
                <UserSidebarContent>
                    {groupsSidebar.map((item: any) => (
                        <GroupsInfo 
                            key={item.name}
                            group_name={item.name}
                            image_group={item.imageGroup}
                            status_group={item.type}
                        />
                    ))}
                </UserSidebarContent>
            </Sidebar>

            {/* Área dos contatos */}
            <Contacts />
            
        </UserSidebar>
    )
}

export default SidebarUser;
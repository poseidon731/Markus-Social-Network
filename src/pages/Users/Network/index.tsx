import React, { useEffect, useState } from "react";
import { HeaderNetwork } from "../styles";

import { 
    FaFacebookF, 
    FaTwitter,
    FaInstagram
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";

const Network = () => {

    const { id }: any = useParams()

    const [ networkData, setNetworkData ] = useState<any>([])

    const url = "/fake_API/db.json";

    const getNewtworkData = async () => {
        const response = await axios.get(url);
        const data = response.data.users;
        setNetworkData(data[id].activity)
    }

    useEffect(() => {
        getNewtworkData();
    }, [])

    return (
        <HeaderNetwork>
            <div className="header-network-content">
                 <div className="social-networks">
                     <FaFacebookF size="20" color="var(--white-text-color)" className="facebook-icon" />
                     <FaTwitter size="20" color="var(--white-text-color)" className="twitter-icon" />
                     <FaInstagram size="20" color="var(--white-text-color)" className="instagram-icon" />
                 </div>
                 <div className="user-activities">
                     <div className="posts-data">
                         <span>{networkData.totPosts}</span>
                         <span>posts</span>
                     </div>
                     <div className="comments-data">
                         <span>{networkData.totComments}</span>
                         <span>comentários</span>
                     </div>
                     <div className="views-data">
                         <span>{networkData.totViews}</span>
                         <span>vizualizações</span>
                     </div>
                 </div>
            </div>
        </HeaderNetwork>
    )
}

export default Network;
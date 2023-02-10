import React, { useEffect, useState } from "react";
import { ServicesContainer, ServicesContent, UserSectionTitle } from "../styles";

import { FaWrench } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserService from "../../../components/UserService";

const Services = () => {

    const { id }: any = useParams();

    const [ service, setService ] = useState([])

    const url = "/fake_API/db.json";

    const getServices = async () => {
        const response = await axios.get(url)
        const data = response.data.users.map((item: any) => item.services)
        setService(data[id])
    }

    useEffect(() => {
        getServices();
    }, [id])

    return (
        <ServicesContainer>
            <UserSectionTitle><FaWrench /> Serviços</UserSectionTitle>
            <ServicesContent>
                {service.map((item: any) => (
                    <UserService 
                        key={item.id}
                        serviceDescription={item.servDesc}
                        serviceIcon={item.servIcon}
                        serviceTitle={item.servTitle}
                    />
                ))}
            </ServicesContent>
        </ServicesContainer>
    )
}

export default Services;
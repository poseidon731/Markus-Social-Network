import React from "react";
import { 
    Container, 
    ServiceDescription, 
    ServiceIcon, 
    ServicesTitle 
} from "./styles";

type UserServiceTypes = {
    key: string,
    serviceIcon: string,
    serviceTitle: string,
    serviceDescription: string
}

const UserService = ({serviceIcon, serviceTitle, serviceDescription}: UserServiceTypes) => {
    return (
        <Container>
            <ServiceIcon><img src={serviceIcon} alt={serviceTitle} /></ServiceIcon>
            <ServicesTitle>{serviceTitle}</ServicesTitle>
            <ServiceDescription>{serviceDescription}</ServiceDescription>
        </Container>
    )
}

export default UserService;
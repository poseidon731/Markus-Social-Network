import React, { useEffect, useState } from "react";
import { 
    PortfolioContainer, 
    PortfolioContent, 
    PortfolioItem, 
    PortfolioItemDetail, 
    PortfolioItemLink, 
    UserSectionTitle 
} from "../styles";

import { FaCloud, FaLink, FaEye } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "../../../components/Modal";
import { PortfolioDetails } from "../../../components/Modal/styles";

type PortfolioProps = {
    openModal: () => void;
    modalIsActive: boolean
}

const Portfolio = ({openModal, modalIsActive}: PortfolioProps) => {

    const { id }: any = useParams();

    const [ portfolio, setPortfolio ] = useState([])

    const url = "/fake_API/db.json";

    const getPortfolio = async () => {
        const response = await axios.get(url)
        const data = response.data.users.map((item: any) => item.images.portfolio)
        setPortfolio(data[id])
    }

    useEffect(() => {
        getPortfolio();
    }, [])

    return (
        <PortfolioContainer>
            <UserSectionTitle><FaCloud /> Portfólio</UserSectionTitle>
            <PortfolioContent>
                {portfolio.map((item: any) => (
                    <div className="portfolio-box" key={item.id}>
                        <PortfolioItem src={item.cover} />
                        <div className="portfolio-links">
                            <PortfolioItemLink><FaLink size="18" /></PortfolioItemLink>
                            <PortfolioItemDetail onClick={openModal}>
                                <FaEye size="18" />
                            </PortfolioItemDetail>
                            {modalIsActive &&
                                <Modal>
                                    <PortfolioDetails>
                                        <img src={item.detail} />
                                        <div className="portfolio-description">
                                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                            <IoClose size="20" onClick={openModal} />
                                        </div>
                                    </PortfolioDetails>
                                </Modal>
                            }
                        </div>
                    </div>
                ))}
            </PortfolioContent>
        </PortfolioContainer>
    )
}

export default Portfolio;
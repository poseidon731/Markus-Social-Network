import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import MainBanner from "../../components/MainBanner";
import { MainPagesContainer } from "../../components/MainPagesContainer/styles";
import { OptionsBar } from "../../components/OptionsBar/styles";
import PublicIcon from '@mui/icons-material/Public';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import { SearchActivityMobile, BoxActivityMobile } from "../../components/SearchActivityMobile";
import MembersCard from "../../components/MembersCard";
import CounterViews from "../../components/CounterViews";
import { ImageUpperBanner } from "../../components/MainBanner/styles";
import MembersUpperBanner from "../../components/_assets/img/members-upper-banner.png"
import { PagesContainer } from "../../components/PagesContainer";
import { UserContext } from "../../contexts/userContext";
import { UserPropsTypes } from "../../types";


const MembersPage = () => {

    const { user }: any = useContext(UserContext);

    const [activeMembers, setActiveMembers] = useState(false);

    const [filterMobile, setFilterMobile] = useState(false);

    const [searchMobile, setSearchMobile] = useState(false);
    

    const handleActiveMembers = () => {
        setActiveMembers(!activeMembers)
    }

    const openActivitySearchMobile = () => {
        setSearchMobile(!searchMobile)
    }

    const openActivityFilterMobile = () => {
        setFilterMobile(!filterMobile)
    }

    return (
        <div>
            <MainBanner 
                titlePage="Membros" 
                pageDescription="Dê uma olhada em todos os membros registrados no Markus! Encontre todos os seus amigos aqui ou faça novos. Pesquise-os facilmente por nome e gerencie-os rapidamente em ordem alfabética ou por data de registro!"
            >
                {/* <MaskBanner /> */}
                <ImageUpperBanner>
                    <img src={MembersUpperBanner} alt="Members Upper Banner" />
                </ImageUpperBanner>
            </MainBanner>
            <MainPagesContainer>
                <OptionsBar>
                    <div className="options_bar-info">
                        <Link to="/membros">
                            <div className="display-options_bar-number">
                                <PublicIcon />
                                <span>Total de Usuários</span>
                                <span className="options_bar-number">{user.length}</span>
                            </div>
                        </Link>
                    </div>
                    <div className="options_bar-search-content">
                        <div className="options_bar-activity">
                            <span className="order-by">Ordenar por:</span>
                            <div className="options_bar-select" onClick={handleActiveMembers}>
                                <div className="options_bar-select-headline">
                                    <span className="select-headline-text">Últimas Atividades</span>
                                    <span className={activeMembers ? "select-headline-icon" : "select-headline-icon-active"} >‹</span>
                                </div>
                                <ul className={activeMembers ? "list-options" : "list-options-none"}>
                                    <li>Últimas Atividades</li>
                                    <li>Registro Recente</li>
                                    <li>Alfabético</li>
                                </ul>
                            </div>
                        </div>
                        <div className="options_bar-search">
                            <form action="post">
                                <label htmlFor="search-options_bar">
                                    <input type="text" name="search-options_bar" id="search-options_bar" placeholder="Pesquisar Membros" />
                                </label>
                                <input type="submit" value="Pesquisar" />
                            </form>
                        </div>
                    </div>
                </OptionsBar>

                {/*Here is the Options Bar Mobile*/}

                <div className="activity-members-mobile">
                    <div className="feed-content-search-activity-mobile">
                        <SearchActivityMobile>
                            <BoxActivityMobile onClick={openActivityFilterMobile}>
                                <TuneIcon />
                                <p>Filtrar</p>
                            </BoxActivityMobile>
                            <BoxActivityMobile onClick={openActivitySearchMobile}>
                                <SearchIcon />
                                <p>Pesquisar</p>
                            </BoxActivityMobile>
                        </SearchActivityMobile>
                    </div>
                    <OptionsBar className={filterMobile ? "show-filter-options_bar-mobile" : "show-filter-options_bar-mobile-none"}>
                        <div className="options_bar-search-content">
                            <div className="options_bar-activity">
                                <span className="order-by">Ordenar por:</span>
                                <div className="options_bar-select" onClick={handleActiveMembers}>
                                    <div className="options_bar-select-headline">
                                        <span className="select-headline-text">Últimas Atividades</span>
                                        <span className={activeMembers ? "select-headline-icon" : "select-headline-icon-active"} >‹</span>
                                    </div>
                                    <ul className={activeMembers ? "list-options" : "list-options-none"}>
                                        <li>Últimas Atividades</li>
                                        <li>Registro Recente</li>
                                        <li>Alfabético</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </OptionsBar>
                    <OptionsBar className={searchMobile ? "show-search-options_bar-mobile" : "show-search-options_bar-mobile-none"}>
                        <div className="options_bar-search-content">
                            <div className="options_bar-search">
                                <form action="post">
                                    <label htmlFor="search-options_bar">
                                        <input type="text" name="search-options_bar" id="search-options_bar" placeholder="Pesquisar Membros..." />
                                    </label>
                                    <input type="submit" value="Pesquisar" />
                                </form>
                            </div>
                        </div>
                    </OptionsBar>
                </div>
                
                <PagesContainer>
                    {user.map((user: UserPropsTypes) => {
                        return (
                            <MembersCard 
                                id={user.id}
                                key={user.id}
                                image_cover={user.images.cover}
                                image_profile={user.images.profile}
                                name={user.name}
                                nickname={user.nickname}
                                rating={user.classification.rating}
                                total_ratings={user.classification.totalRatings}
                            />
                        )
                    })}
                </PagesContainer>
                <CounterViews counterNumber={user.length} counterCategory="membros ativos" />

            </MainPagesContainer>
        </div>
    );
}

export default MembersPage;
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import MainBanner from "../../components/MainBanner";
import { ImageUpperBanner, MaskBanner } from "../../components/MainBanner/styles";
import { MainPagesContainer } from "../../components/MainPagesContainer/styles";
import { OptionsBar } from "../../components/OptionsBar/styles";
import GroupsUpperBanner from "../../components/_assets/img/groups-upper-banner.png";
import PublicIcon from '@mui/icons-material/Public';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import { SearchActivityMobile, BoxActivityMobile } from "../../components/SearchActivityMobile";
import CounterViews from "../../components/CounterViews";
import { PagesContainer } from "../../components/PagesContainer";
import GroupsCard from "../../components/GroupsCard";
import { GroupContext } from "../../contexts/groupContext";



export const GroupsPage = () => {

  const [activeGroups, setActiveGroups] = useState(false);
  const [filterMobile, setFilterMobile] = useState(false);
  const [searchMobile, setSearchMobile] = useState(false);

  const handleActiveGroups = () => {
    setActiveGroups(!activeGroups)
  }

  const openActivitySearchMobile = () => {
    setSearchMobile(!searchMobile)
  }

  const openActivityFilterMobile = () => {
      setFilterMobile(!filterMobile)
  }

  const {group}: any = useContext(GroupContext)

  return (
    <div>
      <MainBanner
        titlePage="Grupos" 
        pageDescription="Bem-vindos aos grupos do Markus! Aqui é o lugar onde você e seus amigos podem conversar sobre as coisas que vocês gostam, como esportes, filmes, músicas e muito mais!" 
      >
        <MaskBanner />
        <ImageUpperBanner>
          <img src={GroupsUpperBanner} alt="Groups Upper Banner" />
        </ImageUpperBanner>
      </MainBanner>
      <MainPagesContainer>
        <OptionsBar>
          <div className="options_bar-info">
              <Link to="/grupos">
                  <div className="display-options_bar-number">
                      <PublicIcon />
                      <span>Total de Grupos</span>
                      <span className="options_bar-number">{group.length}</span>
                  </div>
              </Link>
          </div>
          <div className="options_bar-search-content">
              <div className="options_bar-activity">
                  <span className="order-by">Ordenar por:</span>
                  <div className="options_bar-select" onClick={handleActiveGroups}>
                      <div className="options_bar-select-headline">
                          <span className="select-headline-text">Últimas Atividades</span>
                          <span className={activeGroups ? "select-headline-icon" : "select-headline-icon-active"} >‹</span>
                      </div>
                      <ul className={activeGroups ? "list-options" : "list-options-none"}>
                          <li>Últimas Atividades</li>
                          <li>Mais Popular</li>
                          <li>Mais Recente</li>
                          <li>Alfabético</li>
                      </ul>
                  </div>
              </div>
              <div className="options_bar-search">
                  <form action="post">
                      <label htmlFor="search-options_bar">
                          <input type="text" name="search-options_bar" id="search-options_bar" placeholder="Pesquisar Grupos" />
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
                        <div className="options_bar-select" onClick={handleActiveGroups}>
                            <div className="options_bar-select-headline">
                                <span className="select-headline-text">Últimas Atividades</span>
                                <span className={activeGroups ? "select-headline-icon" : "select-headline-icon-active"} >‹</span>
                            </div>
                            <ul className={activeGroups ? "list-options" : "list-options-none"}>
                              <li>Últimas Atividades</li>
                              <li>Mais Popular</li>
                              <li>Mais Recente</li>
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
                                <input type="text" name="search-options_bar" id="search-options_bar" placeholder="Pesquisar Grupos..." />
                            </label>
                            <input type="submit" value="Pesquisar" />
                        </form>
                    </div>
                </div>
            </OptionsBar>
        </div>

        <PagesContainer>
            {group.map((group: any) => {
                return (
                    <GroupsCard 
                        id={group.id}
                        imageCover={group.imageCover}
                        imageGroup={group.imageGroup}
                        name={group.name}
                        groupType={group.groupType}
                        isPrivate={group.private}
                        key={group.id}
                    />
                )
            })}
        </PagesContainer>
 
        <CounterViews counterNumber={group.length} counterCategory="grupos" />
      </MainPagesContainer>
    </div>
  )
}

export default GroupsPage;
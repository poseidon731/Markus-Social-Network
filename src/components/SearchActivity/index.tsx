import React, { useState, useContext } from "react";
import { Container, Buttom } from "./styles";
import PublicIcon from '@mui/icons-material/Public';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import FormSearch from "../FormSearch"
import { UserContext } from '../../contexts/userContext';


export const SearchActivity = () => {

    const { user }: any = useContext(UserContext)

    const [openSettings, setOpenSettings] = useState(false);

    const [openSearch, setOpenSearch] = useState(false);

    const [selectOption, setSelectOption] = useState(false);


    const openActivitySettings = () => {
        setOpenSettings(!openSettings)
    }
    
    const openActivitySearch = () => {
        setOpenSearch(!openSearch)
    }

    const handleActiveSelect = () => {
        setSelectOption(!selectOption)
    }

    return (
        <Container>
            <div className="display-menbers-number">
                <PublicIcon />
                <span>Total de Usuários</span>
                <span className="number-of-members">{user.length}</span>
            </div>
            <div className="activity-buttons">
                <Buttom bgButton="var(--main-purple)"  sizeButton="2.5rem" onClick={openActivitySettings}>
                    <TuneIcon />
                </Buttom>
                <Buttom bgButton="var(--main-blue)" sizeButton="2.5rem" onClick={openActivitySearch}>
                    <SearchIcon />
                </Buttom>
                {/*Activity Buttons Options*/}
                <div className={openSettings ? 'activity-options' : 'activity-options-close'}>
                    <div className="filter-box">Filtrar Atividades Por:</div>
                    <div className="activity-select">
                        <div className="activity-select-headline" onClick={handleActiveSelect}>
                            <span className="headline-text">Tudo</span>
                            <span className="headline-icon">&#8249;</span>
                        </div>
                        <ul className={selectOption ? 'activity-select-options' : 'activity-select-options-none'}>
                            <li>Tudo</li>
                            <li>Status</li>
                            <li>Fotos</li>
                            <li>Vídeos</li>
                            <li>Audios</li>
                            <li>Links</li>
                            <li>Arquivos</li>
                            <li>Novos Membros</li>
                            <li>Amizades</li>
                            <li>Novos Grupos</li>
                            <li>Membros de Grupos</li>
                        </ul>
                    </div>
                </div>
                <div className={openSearch ? 'activity-options' : 'activity-options-close'}>
                    <FormSearch 
                        placeholderText="Procurar Atividades..."
                    />
                </div>
            </div>
        </Container>
    );
}
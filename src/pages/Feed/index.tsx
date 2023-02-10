import React from "react";
import FeedContainer from "../../components/FeedContainer";
import MainBanner from "../../components/MainBanner";
import { ImageUpperBanner } from "../../components/MainBanner/styles";
import feedUpperBanner from "../../components/_assets/img/up-main-banner.png"

const Feed = () => {
    return (
        <div>
            <MainBanner 
                titlePage="Feed de Notícias" 
                pageDescription="Bem-vindo à página do feed de notícias do Markus! Aqui você encontrará tudo de novo em sua rede social, desde os próximos eventos, atualizações de atividades, novos membros, grupos, tópicos e postagens do fórum e muito mais informações!"
            >
                <ImageUpperBanner>
                    <img src={feedUpperBanner} alt="Feed Upper Banner" />
                </ImageUpperBanner>
            </MainBanner>
            <FeedContainer />
        </div>
    );
}

export default Feed;
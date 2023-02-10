import React from "react";

import PublicIcon from '@mui/icons-material/Public';
import InfoIcon from '@mui/icons-material/Info';
import GradingIcon from '@mui/icons-material/Grading';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import CommentIcon from '@mui/icons-material/Comment';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import ReviewsIcon from '@mui/icons-material/Reviews';

export const menuItem = [
    {
      id: 1,
      nameItem: 'Visão Geral',
      urlMenu: `#`,
      iconItem: <PublicIcon />
    },
    {
      id: 2,
      nameItem: 'Sobre',
      urlMenu: '/pagina-em-construcao',
      iconItem: <InfoIcon />
    },
    {
      id: 3,
      nameItem: 'Atividade',
      urlMenu: '/pagina-em-construcao',
      iconItem: <GradingIcon />
    },
    {
      id: 4,
      nameItem: 'Posts',
      urlMenu: '/pagina-em-construcao',
      iconItem: <DynamicFeedIcon />
    },
    {
      id: 5,
      nameItem: 'Comentários',
      urlMenu: '/pagina-em-construcao',
      iconItem: <CommentIcon />
    },
    {
      id: 6,
      nameItem: 'Amizades',
      urlMenu: '/pagina-em-construcao',
      iconItem: <PeopleOutlineIcon />
    },
    {
      id: 7,
      nameItem: 'Grupos',
      urlMenu: '/pagina-em-construcao',
      iconItem: <GroupsIcon />
    },
    {
      id: 8,
      nameItem: 'Avaliações',
      urlMenu: '/pagina-em-construcao',
      iconItem: <ReviewsIcon />
    }
  ]
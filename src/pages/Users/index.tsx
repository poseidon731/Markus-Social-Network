import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Container, 
  UserContent, 
  UserMainContent 
} from "./styles";

import { 
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { 
  List, 
  MenuList, 
  UserMenu, 
  UserMenuContainer, 
  UserMenuListMobile, 
  UserMenuMobile 
} from "../../components/UserMenuList/styles";

import { menuItem } from "../../config/menuItem";

import Header from "./Header";
import Network from "./Network";
import Projects from "./Projects";
import Skills from "./Skills";
import Slider from "./Slider";
import Portfolio from "./Portfolio";
import Services from "./Services";
import SidebarUser from "./Sidebar";

const Users = () => {

  const [openModal, setOpenModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(true);

  const handleModal = () => {
    setOpenModal(!openModal)
  }

  const handleActiveMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <Container style={{marginTop:'70px'}}>

      <Header />

      <Network />
      
      {/* Menu */}
      <UserMenuContainer>
        <UserMenu>
          <MenuList>
            {menuItem.map((item) => (
              <List  key={item.id}>
                <Link to={item.urlMenu}>
                  <span className="user-menu-icon">{item.iconItem}</span>
                  <span>{item.nameItem}</span>
                </Link>
              </List>
            ))}
          </MenuList>
        </UserMenu>
      </UserMenuContainer>

      {/* Menu Mobile */}
      <UserMenuListMobile>
        <UserMenuMobile>
          <span className="close-user-menu-mobile">{openMenu ? <FaBars size="24" onClick={handleActiveMenu} /> : <FaTimes  size="24" onClick={handleActiveMenu} />}</span>
          <ul className={openMenu ? "user-menu-list-closed" : "user-menu-list"}>
            {menuItem.map((item) => (
              <li key={item.id}>
                <Link to={item.urlMenu}>
                  <span className="user-menu-icon">{item.iconItem}</span>
                  <span>{item.nameItem}</span>
                </Link>
              </li>
            ))}
          </ul>
        </UserMenuMobile>
      </UserMenuListMobile>

      <UserContent>
        <UserMainContent>

          <Slider />

          <Projects />

          <Skills />

          <Portfolio
            openModal={handleModal}
            modalIsActive={openModal}
          />

          <Services />

        </UserMainContent>

        <SidebarUser />
        
      </UserContent>
      
    </Container>
  )
}

export default Users;
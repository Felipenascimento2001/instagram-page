import React from 'react';
import "./Sidenav.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from '@mui/material/Avatar';

function Sidenav() {
  return <div className="sidenav">
    <img className="sidenav__logo" src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt="Logo do insta" />
 
  <div className="sidenav__buttons">
    <button className="sidenav__button">
      <HomeIcon />
        <span>Home</span>
    </button>
    <button className="sidenav__button">
      <SearchIcon />
        <span>Pesquisar</span>
    </button>
    <button className="sidenav__button">
      <ExploreIcon />
        <span>Explorar</span>
    </button>
    <button className="sidenav__button">
      <SlideshowIcon />
        <span>Reels</span>
    </button>
    <button className="sidenav__button">
      <ChatIcon />
        <span>Mensagens</span>
    </button>
    <button className="sidenav__button">
      <FavoriteBorderIcon/>
        <span>Notificações</span>
    </button>
    <button className="sidenav__button">
      <AddCircleOutlineIcon />
        <span>Criar</span>
    </button>
    </div>
    <div className="sidenav__more">
      <button className="sidenav__button">
        <MenuIcon />
        <span>More</span>
      </button>
    </div>
  </div>

}

export default Sidenav
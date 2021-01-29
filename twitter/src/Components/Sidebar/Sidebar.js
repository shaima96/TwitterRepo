import React, { Component } from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import { NavLink } from 'react-router-dom'

class Sidebar extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className="sidebar">
        <TwitterIcon className="sidebar__twitterIcon" />
        <NavLink className='link' to='/homepage'> <SidebarOption id='nav' active Icon={HomeIcon} text="Home" /> </NavLink>

        <NavLink className='link' to='/explore'>   <SidebarOption Icon={SearchIcon} text="Explore" /></NavLink>
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
        <SidebarOption Icon={MailOutlineIcon} text="Messages" />
        <NavLink className='link' to='/bookmarks'>  <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" /></NavLink>
        <SidebarOption Icon={ListAltIcon} text="Lists" />
        <NavLink className='link' to='/profile'> <SidebarOption Icon={PermIdentityIcon} text="Profile" />  </NavLink>

        <SidebarOption Icon={MoreHorizIcon} text="More" />

        <Button variant="outlined" className="sidebar__tweet" >
          Tweet
      </Button>
      </div>
    );
  }
}
export default Sidebar;
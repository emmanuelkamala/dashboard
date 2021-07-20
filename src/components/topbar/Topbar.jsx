import React from 'react';
import './topbar.css';
import { Language, NotificationsNone, Settings } from '@material-ui/icons';

const Topbar = () => {
  return (
    <div className='topbar'>
     <div className="topbarWrapper">
       <div className="topleft">
         <span className='logo'>Admin Dashboard</span>
       </div>
       <div className="topright">
         <div className="topbarIconContainer">
           <NotificationsNone />
           <span className='topIconBadge'>2</span>
         </div>
         <div className="topbarIconContainer">
           <Language />
           <span className='topIconBadge'>2</span>
         </div>
         <div className="topbarIconContainer">
           <Settings />
         </div>
         <img src="./images/ejoka.png" alt="profile" className="topAvatar" />
       </div>
     </div>
    </div>
  )
}

export default Topbar;

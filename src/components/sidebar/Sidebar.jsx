import './sidebar.css';
import { AttachMoney, 
         ChatBubbleOutline, 
         DynamicFeed, 
         Equalizer, 
         LineStyle, 
         LocalGroceryStoreOutlined, 
         MailOutline, 
         PersonOutline, 
         Report, 
         Timeline, 
         TrendingUp, 
         WorkOutline 
      } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />Home
              </li>
            </Link>
            
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Link to='/users' className='link'>
                <PersonOutline className="sidebarIcon" />Users
              </Link>
            </li>
            <li className="sidebarListItem">
            <Link to='/products' className='link'>
              <LocalGroceryStoreOutlined className="sidebarIcon" />Products
            </Link>
            </li>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />Transactions
            </li>
            <li className="sidebarListItem">
              <Equalizer className="sidebarIcon" />Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;

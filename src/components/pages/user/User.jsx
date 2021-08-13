import { CalendarToday, EmailOutlined, LocationSearching, PermIdentity, PhoneAndroid } from '@material-ui/icons';
import './user.css';

function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className='userTitle'>Edit User</h1>
        <button className='userAddButton'>Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <div className="userShowImg">
              <img src="/images/ejoka.png" alt="user" className="userShowImg" />
            </div>
            <div className="userShowTopTitle">
              <span className="userShowUsername">Emmanuel Joatham</span>
              <span className="userShowUserTitle">Web Developer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowInfoIcon" />
              <span className="userShowInfoTitle">ejoka</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowInfoIcon" />
              <span className="userShowInfoTitle">24.03.1986</span>
            </div>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowInfoIcon" />
              <span className="userShowInfoTitle">+255678794479</span>
            </div>
            <div className="userShowInfo">
              <EmailOutlined className="userShowInfoIcon" />
              <span className="userShowInfoTitle">ejoka@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowInfoIcon" />
              <span className="userShowInfoTitle">Dar es salaam | Tanzania</span>
            </div>
            
          </div>
        </div>
        <div className="userUpdate"></div>
      </div>
    </div>
  )
}

export default User;

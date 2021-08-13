import { CalendarToday, EmailOutlined, LocationSearching, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './user.css';

function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className='userTitle'>Edit User</h1>
        <Link to='/newUser'>
          <button className='userAddButton'>Create</button>
        </Link>  
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
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowInfoIcon" />
              <span className="userShowInfoTitle">+2555555555</span>
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
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text" placeholder="Emmanuel Joatham" className="userUpdateInput"></input>
              </div>
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" placeholder="ejoka" className="userUpdateInput"></input>
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" placeholder="ejoka@gmail.com" className="userUpdateInput"></input>
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text" placeholder="+25555555555" className="userUpdateInput"></input>
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" placeholder="Dar es salaam | Tanzania" className="userUpdateInput"></input>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src="/images/ejoka.png" alt="update" className="userUpdateImg" />
                <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                <input type="file" id="file" style={{ display: 'none' }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User;

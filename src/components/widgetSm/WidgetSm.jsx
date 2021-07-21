import { Visibility } from '@material-ui/icons';
import './widgetSm.css';

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Join Member</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="./images/ejoka.png" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">Emmanuel Joatham</div>
            <div className="widgetSmUserTitle">Web Developer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon'/> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="./images/ejoka.png" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">Emmanuel Joatham</div>
            <div className="widgetSmUserTitle">Web Developer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon'/> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="./images/ejoka.png" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">Emmanuel Joatham</div>
            <div className="widgetSmUserTitle">Web Developer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon'/> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="./images/ejoka.png" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">Emmanuel Joatham</div>
            <div className="widgetSmUserTitle">Web Developer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon'/> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="./images/ejoka.png" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">Emmanuel Joatham</div>
            <div className="widgetSmUserTitle">Web Developer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon' /> Display
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm;

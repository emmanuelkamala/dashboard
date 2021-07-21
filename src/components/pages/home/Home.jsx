import Chart from '../chart/Chart';
import FeaturedInfo from '../featuredInfo/FeaturedInfo';
import { userData } from '../../dummyData';
import './home.css';
import WidgetSm from '../../widgetSm/WidgetSm';
import WidgetLg from '../../widgetLg/WidgetLg';

const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userData} title='User Analytics' grid dataKey='Active User' />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home;

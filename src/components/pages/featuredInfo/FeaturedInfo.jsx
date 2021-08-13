import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import './featured.css';

const FeaturedInfo = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className="featuredItemTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">250,000/=</span>
          <span className="featuredMoneyRate">-11.4 <ArrowDownward className='featuredIcon negative' /></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className='featuredItem'>
        <span className="featuredItemTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">540,000/=</span>
          <span className="featuredMoneyRate">-1.4 <ArrowDownward className='featuredIcon negative'  /></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className='featuredItem'>
        <span className="featuredItemTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">200,000/=</span>
          <span className="featuredMoneyRate">+2.4 <ArrowUpward className='featuredIcon' /></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo;

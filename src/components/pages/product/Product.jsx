import { Link } from 'react-router-dom'
import Chart from '../chart/Chart';
import { productData } from '../../dummyData';
import './product.css'

function Product() {
  return (
    <div className='product'>
      <div className="productTitleContainer">
        <div className="productTitle">Product</div>
        <Link to='/newproduct'>
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="/images/s9.png" alt="product" className="productInfoImg" />
            <span className="productName">Samsung S9</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">id:</div>
              <div className="productInfoValue">123</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">sales:</div>
              <div className="productInfoValue">5123</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">active:</div>
              <div className="productInfoValue">yes</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">instock:</div>
              <div className="productInfoValue">no</div>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom"></div>
    </div>
  )
}

export default Product

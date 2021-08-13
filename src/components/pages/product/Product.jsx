import { Link } from 'react-router-dom'
import Chart from '../chart/Chart';
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
          <Chart />
        </div>
        <div className="productTopRight"></div>
      </div>
      <div className="productBottom"></div>
    </div>
  )
}

export default Product

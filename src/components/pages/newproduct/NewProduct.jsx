import { Publish } from '@material-ui/icons';
import './newProduct.css';

function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New Product</h1>
      <form className="productForm">
      <div className="newProductItem">
          <label>Image</label>
          <img src="/images/s9.png" alt="product uploaded" className="productUploadImg" />
          <label for="file">
            <Publish />
          </label>
          <input type="file" id="file" style={{ display: 'none' }} />
        </div>
        <div className="newProductItem">
          <label>Name</label>
          <input type="text" placeholder="Name" />
        </div>
        <div className="newProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        
        <div className="newProductItem">
          <label>Active</label>
          <select name="active" id="active" className="newProductSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newProductButton">Create</button>
      </form>
    </div>
  )
}

export default NewProduct

import './productList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ProductList() {
  const [data, setData] = useState(productRows);
  return (
    <div className='productList'>
      <DataGrid rows={data} disableSelectionOnClick columns={userColumns} pageSize={10} checkboxSelection />
    </div>
  )
}

export default ProductList;

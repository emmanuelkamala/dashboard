import './productList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ProductList() {
  const [data, setData] = useState(productRows);
  const productColumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'product', headerName: 'Product', width: 200, renderCell: (params)=> {
      return (
        <div className='productListItem'>
          <img src={params.row.img} alt="avatar" className='productListImg' />
          {params.row.name}
        </div>
      )
    } },
    { field: 'stock', headerName: 'Stock', width: 120 },
    { field: 'status', headerName: 'Status', width: 160 },
    { field: 'price', headerName: 'Price', width: 160 },
    { field: 'action', headerName: 'Action', width: 160, renderCell: (params) => {
      return (
        <>
          <Link to={'/product/'+params.row.id}>
            <button className='productListEdit'>Edit</button>
          </Link>
          
          <DeleteOutline className='productListDelete' onClick={()=>handleDelete(params.row.id)} />
        </>
      )
    } },
  ];

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }
  return (
    <div className='productList'>
      <DataGrid rows={data} disableSelectionOnClick columns={productColumns} pageSize={10} checkboxSelection />
    </div>
  )
}

export default ProductList;

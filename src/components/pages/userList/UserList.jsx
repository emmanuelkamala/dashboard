import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const UserList = () => { 
  const [data, setData] = useState(userRows)
  const userColumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'User', width: 250, renderCell: (params)=> {
      return (
        <div className='userListUser'>
          <img src={params.row.avatar} alt="avatar" className='userListImg' />
          {params.row.username}
        </div>
      )
    } },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'status', headerName: 'Status', width: 160 },
    { field: 'transaction', headerName: 'Transaction', width: 160 },
    { field: 'action', headerName: 'Action', width: 160, renderCell: (params) => {
      return (
        <>
          <Link to={'/user/'+params.row.id}>
            <button className='userListEdit'>Edit</button>
          </Link>
          
          <DeleteOutline className='userListDelete' onClick={()=>handleDelete(params.row.id)} />
        </>
      )
    } },
  ];

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  return (
    <div className='userList'>
      <DataGrid rows={data} disableSelectionOnClick columns={userColumns} pageSize={10} checkboxSelection />
    </div>
  )
}

export default UserList;

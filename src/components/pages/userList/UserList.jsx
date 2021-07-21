import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';

const UserList = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'User', width: 160, renderCell: (params)=> {
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
          <button className='userListEdit'>Edit</button>
          <DeleteOutline className='userListDelete' />
        </>
      )
    } },
  ];
  
  const rows = [
    { id: 1, 
      username: 'Emmanuel Joatham', 
      avatar: '/images/ejoka.png',
      email: 'emmanuelkamala86@gmail.com',
      status: 'active',
      transaction: '$120.00'
    },
    { id: 2, 
      username: 'Emmanuel Joatham', 
      avatar: '/images/ejoka.png',
      email: 'emmanuelkamala86@gmail.com',
      status: 'active',
      transaction: '$120.00'
    },
    { id: 3, 
      username: 'Emmanuel Joatham', 
      avatar: '/images/ejoka.png',
      email: 'emmanuelkamala86@gmail.com',
      status: 'active',
      transaction: '$120.00'
    },
    { id: 4, 
      username: 'Emmanuel Joatham', 
      avatar: '/images/ejoka.png',
      email: 'emmanuelkamala86@gmail.com',
      status: 'active',
      transaction: '$120.00'
    },
    { id: 5, 
      username: 'Emmanuel Joatham', 
      avatar: '/images/ejoka.png',
      email: 'emmanuelkamala86@gmail.com',
      status: 'active',
      transaction: '$120.00'
    },
  ];
  
  return (
    <div className='userList'>
      <DataGrid rows={rows} disableSelectionOnClick columns={columns} pageSize={4} checkboxSelection />
    </div>
  )
}

export default UserList;

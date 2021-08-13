import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css';
import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/new-user/NewUser";
import ProductList from "./components/pages/productList/ProductList";


function App() {
  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/users'>
            <UserList />
          </Route>
          <Route path='/user/:userId'>
            <User />
          </Route>
          <Route path='/newUser'>
            <NewUser />
          </Route>
          <Route path='/products'>
            <ProductList />
          </Route>
          <Route path='/product/:productId'>
            <User />
          </Route>
          <Route path='/newProduct'>
            <NewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

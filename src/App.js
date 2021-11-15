import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home/Home'
import Header from './Components/Shared/Header/Header';
import Reviews from './Components/Home/Reveiws/Reviews';
import Products from './Components/Home/Products/Products';
import AllProduct from './Components/AllProduct/AllProduct';
import NotFound from './Components/NotFound/NotFound';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Shared/Footer/Footer';
import SingleProductAddToCart from './Components/SinleProductAddToCart/SingleProductAddToCart';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Myorder from './Components/Myorder/Myorder';
import AddProducts from './Components/AddProducts/AddProducts';
import AdminDashboard from './Components/Admin/AdminDashboard/AdminDashboard';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/products">
              <AllProduct></AllProduct>
            </PrivateRoute>
            <PrivateRoute path='/detail/:productId'>
              <SingleProductAddToCart></SingleProductAddToCart>
            </PrivateRoute>
            <PrivateRoute path='/myOrder'>
              <Myorder></Myorder>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/addProducts'>
              <AddProducts></AddProducts>
            </Route>
            <PrivateRoute path='/admin'>
              <AdminDashboard></AdminDashboard>
            </PrivateRoute>

            <Route path="/aboutUs">
              <AboutUs></AboutUs>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>

      </AuthProvider>
    </div >
  );
}

export default App;

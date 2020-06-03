import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './components/menu';
import {Navbar,NavbarBrand} from 'reactstrap';
import './App.css';
import {Dishes} from './sharedDishes/dishes';
import DishDetail from './components/Details';
 import { BrowserRouter } from 'react-router-dom';
 import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configstore';

const store = ConfigureStore();


class App extends Component
{
     constructor(props) 
     {
     super(props);
     this.state = {
      dishes: Dishes
    };
  }

 render() 
 {
 
   return (
    <Provider store={store}>
     <BrowserRouter>
    <div>
      <DishDetail dishes = {this.state.dishes}/>
     
    </div>
    </BrowserRouter>
          </Provider>
   );


   }
}
export default App;

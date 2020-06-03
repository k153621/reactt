import React, {Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Home from '../components/home';
import Menu  from '../components/menu';
import Contact from '../components/contactus';
import App from '../App';
import {Dishes} from '../sharedDishes/dishes';
import DishDetails from '../components/dishdetail';

import About from '../components/aboutus';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
      dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}


class DishDetail extends Component
{
  constructor(props)
  {
  	super(props)
    this.state = {
             
        };

  }


   render()
   {
       const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
const DishWithId = ({match}) => {
      return(
            <DishDetails dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };


return (
      <div>
        <Header />
        <div>
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/contactus' component={Contact} />} />
              <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
      </div>
    );

   }
}
export default withRouter(connect(mapStateToProps)(DishDetail));

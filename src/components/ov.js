import React, {Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import Home from '../components/home';
import { Switch, Route, Redirect } from 'react-router-dom';

class DishDetail extends Component
{
  constructor(props)
  {
  	super(props)
    this.state = {
            selectedDish: null,
            c :null
        }

  }

   onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }


  renderComments()
  {

    
    
  }
   render()
   {
         const DishDetail = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
                
              </div>
            );
        });

        return (
            <div className="container">
            <Header />
            
                <div className="row">
                    {DishDetail}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                   
                  </div>
                </div>
                <Footer />
            </div>
        );

   }
}
export default DishDetail;
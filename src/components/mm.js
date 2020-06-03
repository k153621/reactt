import React, {Component } from 'react';
import {Media} from 'reactstrap';
import DishDetail from '../components/Details';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
           
        };
    }


    render() {
     
     const m = this.props.dishes.map((dish) => {
            return (
                
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}>
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
                <div className="row">
                    {m}
                </div>
                </div>
                 
        );
    }
}
export default Menu;
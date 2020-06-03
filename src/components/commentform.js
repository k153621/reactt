import React, {Component} from 'react';

import { Breadcrumb, BreadcrumbItem,
            Button, Form, FormGroup, Label, Input, Col,Row} from 'reactstrap';



import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { Control, LocalForm, Errors } from 'react-redux-form';

import  { useState } from 'react';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class CommentForm extends Component
{
	constructor(props)
	{
		super(props)
		this.state = {
             Author: '',
             Rating : '',
             Comment :'',
			isActive:false
	
	};

 
}

  toggleModal = () => {
   	this.setState ({
   		isActive:!this.state.isActive
   	})
   }
	render()
	{
   
		return(
 
   <div>
    <Button type="submit" outline color="secondary" onClick={this.toggleModal} >Send Comment <span> <i className="fa fa-edit"></i> </span></Button>


         <Modal isOpen={this.state.isActive} onRequestClose= {this.toggleModal}>
    <ModalHeader toggle={this.state.isActive}>Comment</ModalHeader>
        <ModalBody>
          <LocalForm>
                             <Row className="form-group">
                                <Label htmlFor="Author" md={2}>Author</Label>
                                <Col md={5}>
                                    <Control.text model=".firstname" id="author" name="Author"
                                        placeholder="Author"
                                        className="form-control"
                                        validators={{
                                             required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required'
                                           
                                        }}
                                     />
                                </Col>
                            </Row>
                                 
                                  <Row className="form-group">
                                <Label htmlFor="Rating" md={2}>Rating</Label>
                                <Col md={5}>
                                    <Control.text model=".Rating" id="rate" name="Rating"
                                        placeholder="Rating"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".Rating"
                                        show="touched"
                                        messages={{
                                            required: 'Required'
                                           
                                        }}
                                     />
                                </Col>
                            </Row>

                                <Row className="form-group">
                                <Label htmlFor="Rating" md={2}>Comment</Label>
                                <Col md={5}>
                                    <Control.text model=".Comment" id="rate" name="Comment"
                                        placeholder="Comment"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".Comment"
                                        show="touched"
                                        messages={{
                                            required: 'Required'
                                           
                                        }}
                                     />
                                </Col>
                            </Row>


                            </LocalForm>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={this.state.isActive}>Add</Button>
          <Button color="danger" onClick={this.state.isActive}>Cancel</Button>
           </ModalFooter>
              </Modal>

    </div>
			);

	}

}

export default CommentForm;	

import React from 'react';
import { Panel } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';  
import { ListGroupItem } from 'react-bootstrap';
import { Button } from 'react-bootstrap';   
require('express-session');
class AddItems extends React.Component{
	constructor(props){
		super(props);
		console.log('kkkkkkkkkk ',props.r.user.username)

		console.log('asdas',props);
		this.state={
			name:'',
			location:'',
			image:'',
			description:''
		}
	this.addItem=this.addItem.bind(this);
	this.handleChange=this.handleChange.bind(this);		
	}

	handleChange(e){
		this.setState({ [e.target.name]: e.target.value });
	}

	addItem(){
		//console.log(this.state.userName)
		var that=this.state;

		 $.ajax({
      url: `/item`,
      method: 'POST',
      data:that
    })
    .done (function (data) {
     console.log('ok the data sent ',data)
    })
    .fail(function( jqXHR, textStatus ) {
      alert("item not found");
    });

	}	


	render(){


		return (
			<div>
				<Panel>
					<Panel.Heading>
					Add your Item
					</Panel.Heading> 
					<Panel.Body>
					<ListGroup>
  						<ListGroupItem>Item Name<input type='text' name='name' value={this.state.name} onChange={this.handleChange}/></ListGroupItem>
  						<ListGroupItem>Location<input type='text' name='location' value={this.state.location} onChange={this.handleChange} /></ListGroupItem>
 					    <ListGroupItem>Image<input type='text' name='image' value={this.state.image} onChange={this.handleChange} /></ListGroupItem>
 					    <ListGroupItem>Description<input type='text' name='description' value={this.state.description} onChange={this.handleChange} /></ListGroupItem>
					</ListGroup>
					</Panel.Body>
					<Panel.Footer>
					the button goes here<Button bsStyle="primary" onClick={this.addItem}>GO</Button>
					</Panel.Footer>
				</Panel>


			</div>

			)

	}




}

export default AddItems;

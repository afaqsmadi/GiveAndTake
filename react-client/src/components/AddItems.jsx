import React from 'react';
import { Panel } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';  
import { ListGroupItem } from 'react-bootstrap';
import { Button } from 'react-bootstrap';   

class AddItems extends React.Component{
	constructor(props){
		super(props);

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
	var obj = {
		name: this.state.name,
		image: this.state.image,
		description: this.state.description,
		location: this.state.location
	}
	$.ajax({
      url: `/addItem`,
      method: 'POST',
      data:obj
    })
    .done (function (data) {
    	alert('Items added succesfuly in your account')
     console.log('ok the data sent ',data)
    })
    .fail(function( jqXHR, textStatus ) {
      alert("item not found, textStatus");
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

import React from 'react'; 
import { Button,  Panel, ListGroupItem, ListGroup, FormControl, FormGroup } from 'react-bootstrap';

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
		var that = this;
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
	     	that.setState({
	     		name:'',
				location:'',
				image:'',
				description:''
	     	})
	    })
	    .fail(function( jqXHR, textStatus ) {
	      alert("item not found, textStatus");
	    });
	}	

	render(){
		return (
			<div>
				<Panel bsStyle='primary'>
					<Panel.Heading>
						Add your Item
					</Panel.Heading> 
					<Panel.Body>
					<ListGroup>
  						<ListGroupItem>
	  						<FormGroup bsSize="large">
					          <FormControl
					          	type='text'
					          	name='name'
					            value={this.state.name}
					            placeholder="Item Name"
					            onChange={this.handleChange}
					          />
					        </FormGroup>
  						</ListGroupItem>
  						<ListGroupItem>
	  						<FormGroup bsSize="large">
					          <FormControl
					          	type='text'
					          	name='location'
					            value={this.state.location}
					            placeholder="Location"
					            onChange={this.handleChange}
					          />
					        </FormGroup>
					    </ListGroupItem>
 					    <ListGroupItem>
	  						<FormGroup bsSize="large">
					          <FormControl
					          	type='text'
					          	name='image'
					            value={this.state.image}
					            placeholder="Image"
					            onChange={this.handleChange}
					          />
					        </FormGroup>
 					    </ListGroupItem>
 					    <ListGroupItem>
	  						<FormGroup bsSize="large">
					          <FormControl
					          	type='text'
					          	name='description'
					            value={this.state.description}
					            placeholder="Description"
					            onChange={this.handleChange}
					          />
					        </FormGroup>
 					    </ListGroupItem>
					</ListGroup>
					</Panel.Body>
					<Panel.Footer>
					<Button bsStyle="primary" onClick={this.addItem}>GO</Button>
					</Panel.Footer>
				</Panel>
			</div>
		)
	}
}

export default AddItems;

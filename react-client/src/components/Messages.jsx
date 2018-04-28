import React from 'react';
import { Button,  Panel, ListGroupItem, ListGroup, FormControl, FormGroup } from 'react-bootstrap';
import MessageDisplay from './MessageDisplay.jsx';
//import ShowComments from './showcomments.jsx';

class Messages extends React.Component{
	constructor(props){
		super(props);
		this.state={
			user:[],
			message:'',
			recivedUsername:'',
			refresh:true
		}
		this.handleChange=this.handleChange.bind(this);
		this.addMessages=this.addMessages.bind(this);
		this.getUserData=this.getUserData.bind(this);
	}

	handleChange(e){
		this.setState({[e.target.name]:e.target.value});
	}

	addMessages(){
		var that=this;
		var obj = {
			text: this.state.message,
			recivedUsername: this.state.recivedUsername
		}
		$.ajax({
	      url: `/sendMessage`,
	      method: 'POST',
	      data:obj
	    })
	    .done (function (data) {
	    	that.setState({
				message:'',
				recivedUsername:''	     	
	    	})
	    	that.getUserData();
	    })
	    .fail(function( jqXHR, textStatus ) {
	    	alert("Error");
	    });
	}

	getUserData() {
	    var that = this;
	    var user = this.props.username
	    $.ajax({
	      url: `/user/${user}`,
	      method: 'GET',
	    })
	    .done (function (data) {
	      that.setState({
	        user: data
	      });
	    })
	    .fail(function( jqXHR, textStatus ) {
	      alert( "No user Found");
	    });
	}

	componentDidMount() {
		this.getUserData();
	}

	render(){
		var messagesArr = [];
		var username = this.props.username;
		if (this.state.user.length === 0) {
	      return (
	        <div>
	          <h1> Please Login </h1>
	        </div>
	      )
	    } 
	    this.state.user.messages.forEach(function (message, index) {
	    	messagesArr.push(<MessageDisplay id={message} username={username} key={index}/>)
	    })
		return(
			<div>
				<ListGroupItem>
					<FormGroup bsSize="large">
		          		<FormControl
				          	type='text'
				          	name='recivedUsername'
				            value={this.state.recivedUsername}
				            placeholder="Recipient Username"
				            onChange={this.handleChange}
				        />
		        	</FormGroup>
				</ListGroupItem>
				<ListGroupItem>
					<FormGroup bsSize="large">
		          		<FormControl
				          	type='text'
				          	name='message'
				            value={this.state.message}
				            placeholder="Text"
				            onChange={this.handleChange}
				        />
		        	</FormGroup>
				</ListGroupItem>
				<br	/>
				<Button onClick={this.addMessages} bsStyle='primary'>GO</Button>
				<div>
					{messagesArr}
				</div>
			</div>
			)
	}
}

export default Messages;
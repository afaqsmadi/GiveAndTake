import React from 'react';
import {Button} from 'react-bootstrap';
import ShowComments from './showcomments.jsx';

class Comments extends React.Component{
	constructor(props){
		super(props);
		this.state={
			text:'',
		}
		this.handleChange=this.handleChange.bind(this);
		this.addComment=this.addComment.bind(this);
	}

	handleChange(e){
		this.setState({text:e.target.value});
	}

	addComment(){
		var t=this;
		var obj = {
			text: this.state.text,
			idPost: this.props.id
		}
		$.ajax({
	      url: `/comments`,
	      method: 'POST',
	      data:obj
	    })
	    .done (function (data) {
	     t.setState({
	     	refresh:true
	     })
	    })
	    .fail(function( jqXHR, textStatus ) {
	      alert("comment does not go will");
	    });
	    this.state.text='';
	}

	render(){
		return(
			<div>
			<ShowComments id={this.props.id}/>
			<input type='text' name='' value={this.state.text} onChange={this.handleChange} />
			<Button onClick={this.addComment} bsStyle='primary'>GO</Button>
			</div>
			)
	}
}

export default Comments;
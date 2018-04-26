import React from 'react';
import {Button} from 'react-bootstrap';
import ShowComments from './showcomments.jsx';

class Comments extends React.Component{
	constructor(props){
		super(props);
		this.state={
			text:'',
			idPost:props.id,
			refresh:false

		}
		this.handleChange=this.handleChange.bind(this);
		this.addComment=this.addComment.bind(this);
		

	}

	handleChange(e){
		this.setState({text:e.target.value});
	}

	addComment(){
		var t=this;
		console.log('props of  comments',this.state)

		console.log('hello from comment', this.state.text);
		var that=this.state;

		$.ajax({
      url: `/comments`,
      method: 'POST',
      data:that
    })
    .done (function (data) {
     console.log('ok the comment sent ',data)
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
		var x=this.state.idPost;
		console.log('idpost ',x)
		return(
			<div>
			<ShowComments id={x}/>
			<input type='text' name='' value={this.state.text} onChange={this.handleChange} />
			<Button onClick={this.addComment} bsStyle='primary'>GO</Button>
			</div>
			)
	}




}

export default Comments;
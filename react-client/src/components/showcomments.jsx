import React from 'react';
import {Label} from 'react-bootstrap';
class ShowComments extends React.Component{
	constructor(props){
		super(props);
		this.state={

			arr:[]
		}
	}

	componentDidMount() {
    	var that = this;
	    $.ajax({
	      url: '/comments',
	      method: 'GET',
	    })
	    .done (function (data) {
	    	var x=[];
	        for(var i=0;i<data.length;i++){
	        	if(that.props.id===data[i].idPost){
	        		 x.push(data[i])
	        	}        
	        }
	        that.setState({
	        	arr:x
	        })
	      console.log('comments recived ',data)
	    })
	    .fail(function( jqXHR, textStatus ) {
	      alert( "no Items found");
	    });
	}

	render(){
		var itemId=this.props.id;
		var elem=this.state.arr
		return(
			<div>
			{this.state.arr.map(function(result){
				return (
					<div>
						<h3>
						<div className='row'>
							<div className='col-md-9'>
								<Label bsStyle="success">{result.text}</Label>
							</div>
							<div className='col-md-3'>
								<Label bsStyle="default">by: {result.username}</Label>
							</div>
						</div>
						</h3>
					</div>
					)
			}
			)}
			</div>
		)
	}
}

export default ShowComments;
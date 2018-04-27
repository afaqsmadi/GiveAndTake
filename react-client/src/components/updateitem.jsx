import React from 'react';

class UpdateItem extends React.Component{
	constructor(props){
		super(props);
		this.state={
			userItem:[]
		}
		this.checka=this.checka.bind(this);
	}



  checka() {
    var that = this;
    var user = this.props.username
    console.log(this.props.username);
    $.ajax({
      url: `/user/${user}`,
      method: 'GET',
    })
    .done (function (data) {
      that.setState({
        userItem: data
      });
    
    })
    .fail(function( jqXHR, textStatus ) {
      alert( "No user Found");
    });
  }

  render(){
  	console.log('props from update item',this.props)
  	{if(this.props.username && this.props.id){
  	return(
  		<div>
  		
  			hello from {this.props.username}
  		
  		</div>
  		)
  	}else{
  		return(
<div>
</div>
  			)
  	}


  }
  }

}

export default UpdateItem;
// <Button onClick={this.changeAvaliability()} bsStyle='primary'>change</Button>
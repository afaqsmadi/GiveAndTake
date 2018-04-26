import React from 'react';
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
	
	console.log('from showcomment props',this.props.id)
	console.log('this is the elem ',elem)
	
return(
	<div>
	{this.state.arr.map(function(result){
			return (
			
				<h4>{result.text} _________________ {result.username}</h4>
			
				)
			}
		)}
	
	</div>
	)

}



}


export default ShowComments;
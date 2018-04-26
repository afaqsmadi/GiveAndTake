import React from 'react';
import ShowComments from './showcomments.jsx';
import AddItems from './AddItems.jsx';
import Comments from './comments.jsx';
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
  	var user = this.props.user;
  	var firstName = user.firstName;
  	var lastName = user.lastName;
  	console.log('the user ',user)
    console.log('home props',this.props)
  	return(
  		<div>
  		<h1> Welcome {firstName} {lastName} </h1>
     <AddItems r={this.props}/>
  		<Comments />
      </div>
  	)
  }

}
export default Home;
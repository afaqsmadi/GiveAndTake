import React from 'react';
import AddItems from './AddItems.jsx';
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
  		</div>
  	)
  }

}
export default Home;
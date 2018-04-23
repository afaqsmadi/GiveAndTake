import React from 'react';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
  	var user = this.props.user;
  	var firstName = user.firstName;
  	var lastName = user.lastName;
  	console.log(user)
  	return(
  		<div>
  		<h1> Welcome {firstName} {lastName} </h1>
  		</div>
  	)
  }

}
export default Home;
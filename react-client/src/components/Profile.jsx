import React from 'react';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:[]
    }
  }

  componentDidMount() {
    var that = this;
    var user = this.props.username
    console.log(user);
    $.ajax({
      url: `/user/${user}`,
      method: 'GET',
    })
    .done (function (data) {
      console.log(data)
      that.setState({
        user: data
      });
    })
    .fail(function( jqXHR, textStatus ) {
      alert( "No user Found");
    });
  }

  render(){
  	var user = this.state.user;
  	var firstName = user.firstName;
  	var lastName = user.lastName;
    var imgUrl = user.imgUrl;
    var about = user.about;
  	return(
  		<div className="row">
        <div className="col-md-3" style={{'paddingLeft':'20px'}}>
          <img src={imgUrl}  width = '250px'/>
        </div>
        <div className='col-md-9'>
          <h1> {firstName} {lastName} Profile</h1>
          <p>{about}</p>
        </div>
  		</div>
  	)
  }

}
export default Profile;
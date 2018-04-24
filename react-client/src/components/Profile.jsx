import React from 'react';
import ItemDisplay from './ItemDisplay.jsx';
import {PanelGroup, Panel} from 'react-bootstrap';

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
    var items = user.items
    var arr = []
    if (user.length === 0) {
      return (
        <div>
          <h1> Downloading data </h1>
        </div>
      )
    }
    items.forEach(function (item, index) {
      arr.push(<ItemDisplay id={item} eveKey={index} key={index} />)
    })
    return(
      <div>
        <div className="row">
          <div className="col-md-3" style={{'paddingLeft':'20px'}}>
            <img src={imgUrl}  width = '250px' className="img-thumbnail img-rounded"/>
          </div>
          <div className='col-md-9'>
            <h1> {firstName} {lastName} Profile</h1>
            <p>{about}</p>
          </div>
        </div>
        <div className="row">
          <PanelGroup accordion id="User-Items" defaultActiveKey="1">
            {arr}
          </PanelGroup>
        </div>
      </div>
    )
  }

}
export default Profile;
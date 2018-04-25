import React from 'react';
import ItemDisplay from './ItemDisplay.jsx';
import {PanelGroup, Panel} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Well } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:[],
      firstName:"",
      lastName:"",
      about:"",
      editing:false

    }
    this.renderStart=this.renderStart.bind(this)
     this.renderedit=this.renderedit.bind(this)
     this.edit=this.edit.bind(this)
     this.save=this.save.bind(this)
     this.handelChange=this.handelChange.bind(this)
     this.handelChange2=this.handelChange2.bind(this)
     this.handelChange3=this.handelChange3.bind(this)
  }
  edit(){
    console.log('edit function')
    this.setState({
      editing:true
    })
  }
 save(){
  console.log('save function here ')
  var that=this

  console.log('user state ',
    this.state.user.firstName
    )
  this.state.user.firstName=this.state.firstName;
  this.state.user.lastName=this.state.lastName;
  this.state.user.about=this.state.about;

    // this.setState({
    //   user.firstName:this.state.firstName,
    //   user.lastName:this.state.lastName,
    //   user.about:this.state.about
    // })

    console.log('updated users ',this.state.user)
    var user=this.state.user.username
    console.log("new",user)
   $.ajax({
            url: `/user/${user}` ,
            type: 'PUT',    
            data: JSON.stringify(this.state),
            contentType: 'application/json',
            success: function(result) {
                alert("success?");
            }
        })
   // $.ajax({
   //    url: `/user/${user}`,
   //    method: 'PUT',
   //    data:this.state

   //  })
   //  .done (function (data) {
   //    console.log("post",data)

   //    // that.setState({
   //    //   user: data
   //    // });
   //  })
   //  .fail(function( jqXHR, textStatus ) {
   //    alert( "No user Found");
   //  });
  }
 
handelChange(e){
this.setState({
  firstName:e.target.value

})
}
handelChange2(e){
this.setState({
  lastName:e.target.value

})
}
handelChange3(e){
this.setState({
  about:e.target.value

})
}

  componentDidMount() {
    var that = this;
    var user = this.props.username
    console.log('this is user ',user);
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
  renderStart(){
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
            <Well>{firstName} {lastName} Profile</Well>
              <Well>{about}</Well>
               <Well>click her to Edit    <Button bsStyle="link" onClick={this.edit}>Edit</Button></Well>
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
    renderedit(){
    var user = this.state.user;
    // var firstName = user.firstName;
    // var lastName = user.lastName;
    var imgUrl = user.imgUrl;
    // var about = user.about;
    return(
       <div className="row">
      <div className="col-md-3" style={{'paddingLeft':'20px'}}>
          <img src={imgUrl}  width = '250px'/>
        </div>
        <div className='col-md-9'>
         <FormControl
            value={this.state.firstName}
            placeholder="Enter text"
            onChange={this.handelChange}
          />
          <hr></hr>
          <FormControl
            value={this.state.lastName}
            placeholder="Enter firstName"
            onChange={this.handelChange2}
          />
          <hr></hr>
            <FormControl
            value={this.state.about}
            placeholder="Enter text"
            onChange={this.handelChange3}
          />
          <hr></hr>
     <Button bsStyle="success" onClick={this.save}> save</Button>
      </div>
      </div>
    )
  }

  render(){

  if(this.state.editing){
    return(
     this.renderedit()
      )
    }
    else{
      return(
      this.renderStart ()
        )

      
    }

  }
  



}
export default Profile;
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import LoginD from './components/LoginD.jsx';
import Home from './components/Home.jsx';
import Create from './components/Create.jsx';
import Profile from './components/Profile.jsx';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      user:[]
    }
    this.loginAuthen = this.loginAuthen.bind(this);
  }

  componentDidMount() {
    var that = this;
    $.ajax({
      url: '/loginAuth',
      method: 'GET',
    })
    .done (function (data) {
      that.setState({
        user: data
      });
    })
    .fail(function( jqXHR, textStatus ) {
      alert( "No login seassion found");
    });
  }

  loginAuthen(obj) {
    var that = this;
    $.ajax({
      url: '/login',
      method: 'POST',
      data: obj
    })
    .done (function (data) {
      console.log('Login successfully');
      that.setState({
        user: data
      });
    })
    .fail(function( jqXHR, textStatus ) {
      alert( "Wrong Login information, please check your username & password ");
    });
  }

  render () {
    return (
    <Router>
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              Take & Give
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/">
                Home
              </NavItem>
              <NavItem eventKey={2} >
                <Link to="/profile">Profile</Link>
              </NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} >
                <Link to="/login">Login</Link>
              </NavItem>
              <NavItem eventKey={2} href="#">
                <Link to="/create">Create Account</Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route exact path="/" render={()=><Home user={this.state.user}/>}/>
        <Route path="/login" render={()=><LoginD loginAuthen={this.loginAuthen}/>}/>
        <Route path="/create" render={()=><Create />}/>
        <Route path="/profile" render={()=><Profile username={this.state.user.username}/>}/>
      </div>

    </Router>
    )
  }
}
//<Route exact path="/" component={Home}/>
ReactDOM.render(<App />, document.getElementById('app'));
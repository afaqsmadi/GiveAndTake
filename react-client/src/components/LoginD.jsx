import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Redirect } from 'react-router'

class LoginD extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.sendLogin = this.sendLogin.bind(this);

    this.state = {
      show: true,
      username: '',
      password: ''
    };
  }
 
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleUsername(event) {
    this.setState({username: event.target.value})
  }

  handlePassword(event) {
    this.setState({password: event.target.value})
  }

  sendLogin() {
    var obj = {
      username : this.state.username,
      password : this.state.password
    }
    this.props.loginAuthen(obj);
    this.handleClose();
    return <Redirect to='/profile'/>;
  }

  render() {
    return (
      <div>
        <h2> Welcome </h2>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form  className="form-horizontal" action="/login" method="post">
              <div style={{"marginBottom": "25px"}} className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input onChange={this.handleUsername} type="text" className="form-control" name="username"  placeholder="Username" />
              </div>
              <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input onChange={this.handlePassword} type="password" className="form-control" name="password"  placeholder="password" />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <div className ="row" >
              <div className="col-md-8" >
                <button onClick={this.sendLogin} className="btn btn-u pull-left">Login</button>
                  Don't have an account! 
                <a href="/create">
                  Sign Up Here
                </a>
              </div>
              <div className="col-md-4">
                <Button onClick={this.handleClose}>Close</Button>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default LoginD
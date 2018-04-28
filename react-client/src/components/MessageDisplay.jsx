import React from 'react';
import { Popover, Overlay, Panel } from 'react-bootstrap';

class MessageDisplay extends React.Component {
  constructor(props) {
    super(props);   
    this.state = {
      message:[]
    }
    this.changeColor = this.changeColor.bind(this);
  }

  componentDidMount() {
    var that = this;
    var id = this.props.id
    $.ajax({
      url: `/messages/${id}`,
      method: 'GET',
    })
    .done (function (data) {
      that.setState({
        message: data
      });
    })
    .fail(function( jqXHR, textStatus ) {
      alert("item not found");
    });
  }

  changeColor() {
    if (this.props.username === this.state.message.sendUsername) {
      return "success";
    } else {
      return "warning";
    }
  }

  render(){
    return(
      <div>
        <Panel bsStyle={this.changeColor()}>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Sender : {this.state.message.sendUsername}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>{this.state.message.text}</Panel.Body>
          <Panel.Footer bsStyle={this.changeColor()} >Recipient : {this.state.message.recivedUsername}</Panel.Footer>
        </Panel>
      </div>
    )
  }
}
export default MessageDisplay;

/*
return(
      <div style={{ height: 150 }}>
        <Overlay
          show={true}
          container={this}
          containerPadding={20}
        >
        <Popover
          placement="right"
          title="Popover right"
        >
          text
        </Popover>
        </Overlay>
      </div>
    )
  */
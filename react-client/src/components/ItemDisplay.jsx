import React from 'react';
import {PanelGroup, Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
import Comments from './comments.jsx';

class ItemDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item:[]
    }
    this.changeColor = this.changeColor.bind(this);
  }

  componentDidMount() {
    var that = this;
    var id = this.props.id
    $.ajax({
      url: `/item/${id}`,
      method: 'GET',
    })
    .done (function (data) {
      that.setState({
        item: data
      });
    })
    .fail(function( jqXHR, textStatus ) {
      alert("item not found");
    });
  }

  changeColor() {
    if (this.state.item.available) {
      return ('info');
    } else {
      return ("danger");
    }
  }


  render(){
  	return(
      <div style={{"marginTop": "25px"}}>
        <Panel bsStyle= {this.changeColor()} eventKey={this.props.eveKey}>
          <Panel.Heading>
            <Panel.Title componentClass="h1" toggle>{this.state.item.name}</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            <div className="row">
              <div className="col-md-2">
               <img src={this.state.item.image} height="200px" className="img-thumbnail" />
              </div>
              <div className="col-md-10">
                <ListGroup>
                  <ListGroupItem>Item Description: {this.state.item.description}</ListGroupItem>
                  <ListGroupItem>Item location: {this.state.item.location}</ListGroupItem>
                  <ListGroupItem>Item added at: {this.state.item.dateOfCreation}</ListGroupItem>
                </ListGroup>              
              </div>
            </div>
            <ListGroup>
              <ListGroupItem>Comment: <Comments /></ListGroupItem>
            </ListGroup>
          </Panel.Body>
          <Panel.Footer>Item Belong to : {this.state.item.username}</Panel.Footer>
        </Panel>
      </div>
    )
  }

}
export default ItemDisplay;
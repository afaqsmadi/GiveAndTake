import React from 'react';
import {PanelGroup, Panel} from 'react-bootstrap';


class ItemDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item:[]
    }
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

  renderAvailable(){
    return(
      <div style={{"marginTop": "25px"}}>
        <Panel bsStyle="info" eventKey={this.props.eveKey}>
          <Panel.Heading>
            <Panel.Title componentClass="h1" toggle>{this.state.item.name}</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            <div className="row">
              <div className="col-md-2">
               <img src={this.state.item.image} height="200px" className="img-thumbnail" />
              </div>
              <div className="col-md-8">
                <h3>{this.state.item.description}</h3>
              </div>
              <div className="col-md-2">
                <h3>{this.state.item.location}</h3>
              </div>
            </div>
          </Panel.Body>
        </Panel>
      </div>
    )
  }

  renderNotAvailable(){
    return(
      <div style={{"marginTop": "25px"}}>
        <Panel bsStyle="danger" eventKey={this.props.eveKey}>
          <Panel.Heading>
            <Panel.Title componentClass="h1" toggle>{this.state.item.name}</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            <div className="row">
              <div className="col-md-2">
               <img src={this.state.item.image} height="200px" className="img-thumbnail" />
              </div>
              <div className="col-md-8">
                <h3>{this.state.item.description}</h3>
              </div>
              <div className="col-md-2">
                <h3>{this.state.item.location}</h3>
              </div>
            </div>
          </Panel.Body>
        </Panel>
      </div>
    )
  }

  render(){
  	if(this.state.item.available === true) {
      return this.renderAvailable()
    } else {
      return this.renderNotAvailable()
    }
  }

}
export default ItemDisplay;
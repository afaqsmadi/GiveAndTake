import React from 'react';
import Comments from './comments.jsx';
import ItemDisplay from './ItemDisplay.jsx';
import { Button } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import {ListGroupItem} from 'react-bootstrap';
import {PanelGroup} from 'react-bootstrap';
class ShowItem extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      value:'',
      sItem:[]
    }
    this.handleChange=this.handleChange.bind(this);
    this.getItem=this.getItem.bind(this);
    this.getColor=this.getColor.bind(this);
  }

  handleSelect(activeKey){
    this.setState({activeKey});
  }

  handleChange(e){
    this.setState({value:e.target.value})

  }

  componentDidMount() {
    var that = this;
    $.ajax({
      url: '/item',
      method: 'GET',
    })
    .done (function (data) {
      that.setState({
        sItem: data
      });
    })
    .fail(function( jqXHR, textStatus ) {
      alert( "no Items found");
    });
  }

  getItem(){
    var that=this;
    console.log(this.state.value)
    $.ajax({
      type:'GET',
      url:'/item',
      success:function(data){
        console.log(data)
        var x=[];
        for(var i=0;i<data.length;i++){
          if(data[i].name===that.state.value){
            x.push(data[i])
          }
         
        }
         that.setState({sItem:x})
          console.log('sItem= ', that.state.sItem)
      }


    })


  }

  getColor(y){
    if(y.available===true){
      return 'info'
    }else{
      return 'danger'
    }
  }

  render(){
  const rstyle={
   
    align: 'center',
    background:'#ABCDEF'
  }

  const rcenter={
    textAlign: 'center'
  }
  var r=this;
  	return(
  		<div>

  		

      <h1> search </h1>
      <input type="text" value={this.state.value} onChange={this.handleChange}/>
      <Button  onClick={this.getItem} bsStyle='primary'>SEARCH</Button>
      <div>
       <PanelGroup activeKey={this.state.activeKey}
        onSelect={this.handleSelect}>
      {this.state.sItem.map(function(y){
        return(
          <div>
            <ItemDisplay id={y._id}/>
          </div>  
        )
      }

      )}
      </PanelGroup>


      </div>

  		</div>
  	)
  }

}
export default ShowItem;


// <div className='row' style={rstyle}>
//             <div className='col-md-4' >
//             {y.image}
//             </div>
//             <div className='col-md-8'>
//            <h5> {y.name} </h5>
//            <h5> {y.available} </h5>
//            <h5> {y.location} </h5>
//            <h5> {y.description} </h5>
//             </div>

//           </div>


// <Panel bsStyle={r.getColor(y)}>
//        <Panel.Heading  bsStyle={r.getColor(y)}>
//        <Panel.Title componentClass="h3"  bsStyle={r.getColor(y)} toggle>{y.name}</Panel.Title>
//        </Panel.Heading>
//     <Panel.Body  bsStyle={r.getColor(y)} collapsible>
//         <div className='row'>
//         <div className='col-md-2' style={rcenter}>
//         <img src={y.image} width='70px'/>
//         </div>
//         <div className='col-md-10'>
//         <ListGroupItem  bsStyle={r.getColor(y)}>{y.location}</ListGroupItem>
//         <ListGroupItem  bsStyle={r.getColor(y)}>{y.description}</ListGroupItem>
//         </div>
//         </div>
//     </Panel.Body>
//     <Panel.Footer>
    
//     here from 2 days
//     <Comments id={y._id}/>
//     </Panel.Footer>
   
//   </Panel>
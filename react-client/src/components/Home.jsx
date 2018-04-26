import React from 'react';
import ShowComments from './showcomments.jsx';
import AddItems from './AddItems.jsx';
import Comments from './comments.jsx';
import ItemDisplay from './ItemDisplay.jsx';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      arr:[]
    }
  }
  
  componentDidMount(){
    var that = this;
    var arr = this.state.arr
    $.ajax({
      url: '/item/home',
      method: "GET"
    })
    .done(function(data){
      that.setState({
        arr: data
      })
    })
    .fail(function (jqXHR, textStatus) {
      alert("no match found!");
    });
  }

  render(){
    var arr= this.state.arr
    var array = []
     if(arr.length===0){
      return(<h1>not found!</h1>)
     }
  return(
    <div>
     {arr.map(function(elem,index){
      return(
          <ItemDisplay id={elem._id} />
        )
     })}
    </div>
    )

  }
}
export default Home;
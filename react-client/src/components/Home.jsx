import React from 'react';

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

        <li key={index}>{elem.name}
        <p>{elem.image}</p>
        <p>{elem.dateOfCreation}</p>
        <p>{elem.location}</p>
        <p>{elem.description}</p>
        <p>{elem.available}</p>
        <hr />
        </li>

        )
     })}
    </div>
    )

  }
}
export default Home;
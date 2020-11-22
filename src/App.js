import React from 'react';
import logo from './logo.svg';
import './App.css';
import Info from "./Info";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.isLoggedIn=false;
    this.state = {name: '', password:''};
    this.nameList = [{FN : "Rahul Jaiswal", Email: "Rahul.Jaiswal@bentley.com",PS : "RJ"},{FN : "AB", Email: "Rahul.Jaiswal@bentley.com"  , PS : "CD"}];
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name =event.target.name;

    this.setState({
      [name]:  event.target.value
    });
  }

  handleSubmit(event) {

  this.isLoggedIn=false;
  this.nameList.forEach(m =>
    {
      if(m.FN == this.state.name  &&  m.PS == this.state.password)
         {
          this.isLoggedIn=true;
          this.setState({
            name:  this.state.name , password: this.state.password
         });
         event.preventDefault();
         return;
         }
        });  
      }

  render()
  {
    if(this.isLoggedIn)
    {
      return (<div><Info name= {this.state.name} nameList = { this.state.nameList} /> </div>);
    }

    else{
return (
<div>

<h1 style={{backgroundColor :"black",color : "white" , padding : "8px" , fontSize : "28px" ,  width:"88%"}}>Welcome to BookShare App</h1>

<div className="container">
<form onSubmit={this.handleSubmit}>
       <label>
          Name:
          <input type="text" name="name"  value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
</div>

  </div>
   
  );
}
}
}

export default App;

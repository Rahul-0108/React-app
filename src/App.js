import React from 'react';
import './App.css';
import Info from "./Info";
import {connect} from "react-redux"
import {ChangeUser, ChangeUserLogin} from "./Redux/Action"

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
      if(m.FN === this.state.name  &&  m.PS === this.state.password)
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
      return (<div><Info name= {this.state.name} nameList = { this.nameList} /> </div>);
    }

    else{
return (
<div>

<h1 style={{backgroundColor :"black",color : "white" , padding : "8px" , fontSize : "28px" ,  width:"88%"}}>Welcome to BookShare Apps</h1>

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



// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.props=props;
//     this.handleChange = this.handleChange.bind(this);
//     this.handleChange2 = this.handleChange2.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     const name =event.target.value;
//     this.props.ChangeUser(name, this.props.password)
//   }
//   handleChange2(event) {
//     const password =event.target.value;
//     this.props.ChangeUser(this.props.name, password)
//   }

//   handleSubmit(event) {
//   this.props.ChangeUserLogin(false);
//   this.props.nameList.forEach(m =>
//     {
//       if(m.FN === this.props.name  &&  m.PS === this.props.password)
//          {
//          this.props.ChangeUserLogin(true);
//          this.forceUpdate();
//          event.preventDefault();
//          return;
//          }
//         });  
//       }

//   render()
//   {
//     if(this.props.isLoggedIn)
//     {
//       return (<div><Info name= {this.props.name} nameList = { this.props.nameList} /> </div>);
//     }

//     else{
// return (
// <div>

// <h1 style={{backgroundColor :"black",color : "white" , padding : "8px" , fontSize : "28px" ,  width:"88%"}}>Welcome to BookShare App</h1>

// <div className="container">
// <form onSubmit={this.handleSubmit}>
//        <label>
//           Name:
//           <input type="text" name="name"  value={this.props.name} onChange={this.handleChange} />
//         </label>
//         <label>
//           Password:
//           <input type="text" name="password" value={this.props.password} onChange={this.handleChange2} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
// </div>

//   </div>
   
//   );
// }
// }
// }

// const mapStateToProps = state => {
//   return {name: state.user.name, password: state.user.password , isLoggedIn: state.user.isLoggedIn, nameList: state.user.nameList}
// }

// const mapDispatchToProps = dispatch => {
//   return {ChangeUser: (n ,p) => dispatch(ChangeUser(n,p)) , ChangeUserLogin: (n) => dispatch(ChangeUserLogin(n))}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)



import  React  from "react";
import "./App.css";
import CustomButton from  "./CustomButton";

class Info extends React.Component
{
constructor(props)
{
    super(props);
    this.state = {isModalEnable : false, bookInfo:  [{name :"C#" ,  Author : "Yashvant  Kanetkar",  Owner : "A"  , isRented :true},
    {name :"C++" ,  Author : "Yashvant  Kanetkar",  Owner : "B"  , isRented :true},
    {name :"Java" ,  Author : "Yashvant  Kanetkar",  Owner : "D"  , isRented :false},
    {name :"C" ,  Author : "Yashvant  Kanetkar",  Owner : "F"  , isRented :false},
    {name :"Go" ,  Author : "Yashvant  Kanetkar",  Owner : "H"  , isRented :true}] , currenBook: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlebookSubmit = this.handlebookSubmit.bind(this);
}

renderTableHeader() {
    let header = Object.keys(this.state.bookInfo[0])
    let allHeaders= header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    });

    allHeaders.push(<th key={"Rent"}>{"Rent".toUpperCase()}</th>)
    return  allHeaders;
 }

 handleSubmit(name ,event) {
    this.setState({isModalEnable : true  , bookInfo : this.state.bookInfo , currenBook: name });
    event.preventDefault();
  }

  handlebookSubmit(event) {

    this.state.bookInfo.forEach(m =>
        {
            if(m.name == this.state.currenBook)
            {
                m.isRented =  true;
                return;
            }
        });
    this.setState({isModalEnable : false  , bookInfo : this.state.bookInfo ,  currenBook: "" });
    event.preventDefault();
  }


 renderTableData() {
    return this.state.bookInfo.map((book, index) => {
       const {  name, Author, Owner  ,  isRented } = book //destructuring
       return (
          <tr key={name}>
             <td>{name}</td>
             <td>{Author}</td>
             <td>{Owner}</td>
             <td>{isRented ? "Y": "N"}</td>
             <td><CustomButton isRented={isRented} onClick={(e) =>this.handleSubmit(name,e)}/></td>
          </tr>
       )
    })
 }

render()
{
return (  

        <div>
        <h1 style={{backgroundColor :"black",color : "white" , padding : "8px" , fontSize : "28px" ,  width:"88%"}}>Welcome {this.props.name}</h1>
        <div>
              <h1 style = {{textAlign:"center" , margin : "80px 2px 0px 0px"}}>All Books in BookShare App</h1>
              <div style={{margin: "40px 0px 0px 440px"}}>
              <table>
                 <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
              </div>
           {this.state.isModalEnable &&  <div id="myModal" class="modal">

 
  <div class="modal-content">
          <form onSubmit={this.handlebookSubmit}>
       <label>
          Name:
          <input type="text"  value={this.props.name}  disabled/>
        </label>
        <label>
          Book Name:
          <input type="text"  value={this.state.currenBook} disabled />
        </label>
        <label>
          Duration:
          <input type="text" />
        </label>
        <input type="submit" value="Submit" />
      </form>
</div>
</div>
           }
</div>
           </div>

        );

}
}

export  default  Info;
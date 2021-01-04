import {BookInfo, User, UserLogin} from "./Action"

const userInitialState= {name: '', password:'', isLoggedIn: false, nameList: [{FN : "Rahul Jaiswal", Email: "Rahul.Jaiswal@bentley.com",PS : "RJ"},{FN : "AB", Email: "Rahul.Jaiswal@bentley.com"  , PS : "CD"}] };

export const userReducer = (state= userInitialState, action) =>
{
switch(action.type)
{
  case User:
    return {...state, name: action.name, password: action.password }
  case UserLogin:
    return {...state, isLoggedIn:action.payload }
  default:
    return state;
}
}

export  const  bookInitialState = {isModalEnable : false, 
bookInfo:  [
{name :"C#" ,  Author : "Yashvant  Kanetkar",  Owner : "A"  , isRented :true},
{name :"C++" ,  Author : "Yashvant  Kanetkar",  Owner : "B"  , isRented :true},
{name :"Java" ,  Author : "Yashvant  Kanetkar",  Owner : "D"  , isRented :false},
{name :"C" ,  Author : "Yashvant  Kanetkar",  Owner : "F"  , isRented :false},
{name :"Go" ,  Author : "Yashvant  Kanetkar",  Owner : "H"  , isRented :true}],
currenBook: ""};

export const bookReducer = (state= bookInitialState, action) =>
{
switch(action.type)
{
  case BookInfo:
    return {...state, isModalEnable: action.isModalEnable, currenBook: action.currentBook }
  default:
    return state;
}
}

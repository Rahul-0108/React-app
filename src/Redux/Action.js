export const User= "changeuser";
export const UserLogin= "changeuserlogin";
export const BookInfo= "bookInfo";

export function ChangeUser(name, password)
{
  return {type: User , name: name,password: password }
}
export function ChangeUserLogin(login)
{
  return {type: UserLogin , payload: login }
}
export function ChangeBookInfo(isModalEnable, currentBook)
{
  return {type: BookInfo , isModalEnable: isModalEnable , currentBook: currentBook }
}
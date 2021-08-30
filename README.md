# React-app

# Clone the repository
# use npm install , then npm run build in cmd where package.json file is there
# Use npm start 



Important Concepts

1. If ParentComponent rerenders after updating its state , then child component will also rerender , but child Component
will retain all its state values. While rerendering of parent component ,render method of child component is called again and 
componentDidUpdate of child Component will also be called after rerendering but componentWillUnmount and componentdidmount of 
child Component are not called and all satae values of Child Component remains.

class Parent extends React.C... {
.....
.....
render() {
  .....
  <Child/>
}
}

2.

a. setState will immediately rerenders the compont.
b. all lines of code in a method(e.g , event handler) after the line setState are executed.
c  setState calls are asynchronous, React may not immediately set the new State , so if we need new value in that particular method
   after updation , we should use callback in setState

3. For Redux also , all lines of code after the line of dispaching Action to update state in reducer though props are executed and
   dispatching Action to update state in reducer is asynchronous like normal setState

4. For Redux, when a store state variable value is updated then all the Components which have assigned that state variable as prop 
   (by mapStateToProps) will be rerendered ,i.e, render method of that Component is called and after that componentDidUpdate is called,
   even it is not at all using that prop value in the component.

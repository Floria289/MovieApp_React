import { useState, useEffect} from 'react';
import './App.css';

// Component: help achieve different objects

// const Person = (props) => {
//   return (
//     <>
//     <h1>Name: {props.name}</h1>
//     <h2>Last Name: {props.lastName}</h2>
//     <h2>Age: {props.age}</h2>
//     </>
//   )
// }

// State: represent information about component current situation
// never manully modify state
// the funtion start with a use: called a hook
// [name of the state, setter function]

// Event: a trigger of user action
const App = () => {

  // const name = "John";
  // const isNameShown = false;

  const [counter, setCounter] = useState(0);

  useEffect(
    () => {
      setCounter(100);
    }, []
  )
  
  return (
    <div className="App">
      {/* <Person name = {'John'} lastName = {'Doe'} age = {30}/>
      <Person/> */}

      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;

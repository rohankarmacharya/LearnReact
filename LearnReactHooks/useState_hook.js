// Importing the useState hook from the React library.
// useState allows this component to store and update a value (state).
import { useState } from "react";

// This is a React component called Counter.
function Counter(){
     // Here we create a state variable called "count"
    // and a function to update it called "setCount".
    // useState(0) means the initial value of count = 0.
    // Destructuring is used: [currentValue, updateFunction]
    const [count, setCount] = useState(0);
    return(
        <>
        <p>Count:{count}</p>
        <button onClick ={()=> setCount(count+1)}>Increment</button>
        <button onClick ={()=> setCount(count-1)}>Decrement</button>
        </>
    );
    
}
// This line isn't shown in your snippet, but normally you'd export the component:
// export default Counter;
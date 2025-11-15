import { useState } from "react";

function NameForm() {
    // State to store the value of the input
    const [name, setName] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        alert(`Hello, ${name}!`);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Controlled input */}
            <input
                type="text"
                value={name}              // Input value comes from state
                onChange={e => setName(e.target.value)} // Update state on every keystroke
                placeholder="Enter your name"
            />
            <button type="submit">Greet</button>
        </form>
    );
}

export default NameForm;


/*
🔹 Step-by-step explanation

1. const [name, setName] = useState("");

Create a state variable name to store input value.
Initially empty string "".

2. <input value={name} onChange={...} />

value={name} → input shows the value from React state.
onChange={e => setName(e.target.value)} → every time user types, update the state with the input’s value.

3. handleSubmit

Prevents page reload with e.preventDefault().
Shows an alert with the current name state.

4. <form onSubmit={handleSubmit}>
The form calls the submit handler when the user presses Enter or clicks the button.
*/
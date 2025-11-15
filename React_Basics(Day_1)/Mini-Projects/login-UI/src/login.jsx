import { useState } from "react";

function Login() {

  // email → stores input email
  // setEmail → updates email value
  const [email, setEmail] = useState("");

  // password → stores input password
  // setPassword → updates password value
  const [password, setPassword] = useState("");

  // loggedIn → checks if user is logged in or not
  // setLoggedIn → updates login status
  const [loggedIn, setLoggedIn] = useState(false);

  // Function to validate login
  const handleLogin = () => {

    // Check if email & password match the demo credentials
    if (email === "test@gmail.com" && password === "1234") {
      setLoggedIn(true);  // login successful
    } else {
      alert("Invalid credentials"); // show error
    }
  };

  // If login success → show welcome screen instead of form
  if (loggedIn) {
    return <h2>Welcome, {email}</h2>;
  }

  // Otherwise show login form
  return (
    <div>
      <h2>Login</h2>

      {/* Email input */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // update email
      /><br/>

      {/* Password input */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // update password
      /><br/>

      {/* Login button */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;

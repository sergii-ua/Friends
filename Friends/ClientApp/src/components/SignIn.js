import React, { useState } from "react";

export const SignIn = () => {

  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const signIn = () => {

    const userObj = { Email: email, Password: password };
    console.log(userObj);
    fetch('/api/Auth/SignIn', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userObj)
    }).then((response) => {
      console.log(response);
      return response.text();
    }).then(data => localStorage.setItem("token", data))
    console.log('FORM SUBMIT');
  }

  const updateEmail = (event) => {
    setEmail(event.target.value)
    console.log(event.target.value);
  }
  const updatePassword = (event) => {
    setPassword(event.target.value)
    console.log(event.target.value);
  }

  return (
    <div className="form-create-user">
      <form onSubmit={signIn}>
        <div>
          <div className="form-label">Sign in</div>
          <div className="close">X</div>
        </div>
        <div>
          <input type="email" placeholder="Email" onChange={updateEmail} value={email} />
        </div>
        <div>
          <input type="password" placeholder="Password" onChange={updatePassword} value={password} />
        </div>
        <button>Log In</button>
        <a href="/signup">Sign up</a>
      </form>
    </div>
  );
}
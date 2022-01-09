// import React, { Component, useState } from 'react';

// export class SignIn extends Component {
//   //static displayName = CreateUser.name;

//   constructor(props) {
//     super(props);
//     this.state = { Email: null, Password: null };
//     this.signIn = this.signIn.bind(this);
//     //this.handleClick = this.handleClick.bind(this);
//     this.updateEmail = this.updateEmail.bind(this);
//     this.updatePassword = this.updatePassword.bind(this);
//   }

//   componentDidMount() {
//     //this.populateWeatherData();
//   }
// signIn (event) {
//   event.preventDefault();
//   // const [firstName, setFirstName] = useState('');
//   // const [lastName, setLastName] = useState('');
//   const userObj = { Email:this.state.Email, Password:this.state.Password };
//   console.log(userObj);
//     fetch('https://localhost:44332/api/Auth/SignIn', {
//       method: 'POST',
//       headers: {"Content-Type": "application/json" },
//       body: JSON.stringify(userObj)
//     }).then((response)=> {
//       return response.text();
//       //console.log(response);

//     }).then(data=>localStorage.setItem("token", data))
//   console.log('FORM SUBMIT');
// }

// handleClick(){
//   console.log('Success!')
// }

// updateEmail(event){
//   this.setState({Email : event.target.value})
//   console.log(event.target.value);
//   }
//   updatePassword(event){
//     this.setState({Password : event.target.value})
//     }

//   render() {
//     const {closeModal}=this.props;
//     console.log(closeModal);
//     return (
//       <div className="form-signin">
//         <form onSubmit={this.signIn}>
//           <div className="close" onClick={closeModal}>X</div>
//           <div>
//             <input type="email" placeholder="Email" onChange={this.updateEmail}/>
//           </div>
//           <div>
//             <input type="text" placeholder="Password" onChange={this.updatePassword} />
//           </div>
//           <button>Create</button>
//         </form>
//       </div>
//     );
//   }
// }

import React, { useEffect, useState } from "react";

const SignIn = ({ closeModal }) => {

  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const signIn = () => {


    const userObj = { Email: email, Password: password };
    console.log(userObj);
    fetch('https://localhost:44332/api/Auth/SignIn', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userObj)
    }).then((response) => {
      return response.text();
      //console.log(response);
      closeModal();

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
        <div className="close" onClick={closeModal}>X</div>
        <div>
          <input type="email" placeholder="Email" onChange={updateEmail} value={email} />
        </div>
        <div>
          <input type="password" placeholder="Password" onChange={updatePassword} value={password} />
        </div>
        <button>Log In</button>
      </form>
    </div>
  );
}
export default SignIn;
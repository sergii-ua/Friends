import React, { useState } from 'react';
const SignUp = ({closeModal}) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const signUp = ()=> {
      const userObj = { Email:email, FirstName:firstName,
    LastName:lastName, Password:password };
    console.log(userObj);
    fetch('/api/Auth/SignUp', {
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(userObj)
    });
    //closeModal();
  }
  const updateEmail = (e)=>{
    setEmail(e.target.value);
  }
  const updatePassword = (e)=>{
    setPassword(e.target.value);
  }
  const updateFirstName = (e)=>{
    setFirstName(e.target.value)
  }
  const updateLastName = (e)=>{
    setLastName(e.target.value);
  }
      return (
      <div className="form-create-user">
        <form onSubmit={signUp}>
          <div> 
          <div className='form-label'>Sign up</div>        
          <div className="close" onClick={closeModal}>X</div>
          </div>
          <div>
            <input type="email" placeholder="Email" onChange={updateEmail} value={email}/>
          </div>
          <div>
            <input type="text" placeholder="First Name" onChange={updateFirstName} value={firstName} />
          </div>
          <div>
            <input type="text" placeholder="Last Name" onChange={updateLastName} value={lastName} />
          </div>
          <div>
            <input type="password" placeholder="Password" onChange={updatePassword} value={password} />
          </div>
          <button>Create</button>
          <a href="/signin">Sign in</a>
        </form>
      </div>
    );
}

export default SignUp;
// export class SignUp extends Component {
//   //static displayName = CreateUser.name;

//   constructor(props) {
//     super(props);
//     this.state = { Email: null, firstName: null, lastName: null, Password: null };
//     this.signUp = this.signUp.bind(this);
//     //this.handleClick = this.handleClick.bind(this);
//     this.updateEmail = this.updateEmail.bind(this);
//     this.updatePassword = this.updatePassword.bind(this);
//   }

//   componentDidMount() {
//     //this.populateWeatherData();
//   }
// signUp () {
//   // const [firstName, setFirstName] = useState('');
//   // const [lastName, setLastName] = useState('');
//   const userObj = { Email:this.state.Email, firstName:this.state.firstName,
//     lastName:this.state.lastName, Password:this.state.Password };
//   console.log(userObj);
//     fetch('https://localhost:44332/api/Auth/SignUp', {
//       method: 'POST',
//       headers: {"Content-Type": "application/json" },
//       body: JSON.stringify(userObj)
//     }).then(()=> {
//       console.log("account is created");
      
//     })
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
//     console.log(event.target.value);
//     }

//   render() {
//     const {closeModal}=this.props;
//     console.log(closeModal);
//     return (
//       <div className="form-create-user">
//         <form onSubmit={this.signIn}>
//           <div className="close" onClick={closeModal}>X</div>
//           <div>
//             <input type="email" placeholder="Email" onChange={this.updateEmail}/>
//           </div>
//           <div>
//             <input type="text" placeholder="First Name" onChange={this.updatePassword} />
//           </div>
//           <div>
//             <input type="text" placeholder="Last Name" onChange={this.updatePassword} />
//           </div>
//           <div>
//             <input type="password" placeholder="Password" onChange={this.updatePassword} />
//           </div>
//           <button>Create</button>
//         </form>
//       </div>
//     );
//   }
// }

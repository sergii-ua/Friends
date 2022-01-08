import React, { Component, useState } from 'react';

export class SignIn extends Component {
  //static displayName = CreateUser.name;

  constructor(props) {
    super(props);
    this.state = { Email: null, Password: null };
    this.signIn = this.signIn.bind(this);
    //this.handleClick = this.handleClick.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  componentDidMount() {
    //this.populateWeatherData();
  }
signIn () {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  const userObj = { Email:this.state.Email, Password:this.state.Password };
  console.log(userObj);
    fetch('https://localhost:44332/api/Auth/SignIn', {
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(userObj)
    }).then(()=> {
      console.log("logged in");
      
    })
  console.log('FORM SUBMIT');
}

handleClick(){
  console.log('Success!')
}

updateEmail(event){
  this.setState({Email : event.target.value})
  console.log(event.target.value);
  }
  updatePassword(event){
    this.setState({Password : event.target.value})
    }

  render() {
    const {closeModal}=this.props;
    console.log(closeModal);
    return (
      <div className="form-signin">
        {/* <div className='button__container'>
        <button className='button' onClick={this.handleClick}>
          Click Me
        </button>
      </div> */}
        <form onSubmit={this.signIn}>
          <div className="close" onClick={closeModal}>X</div>
          <div>
            <input type="email" placeholder="Email" onChange={this.updateEmail}/>
          </div>
          <div>
            <input type="text" placeholder="Password" onChange={this.updatePassword} />
          </div>
          <button>Create</button>
        </form>
      </div>
    );
  }
}


// export const CreateUser = ({closeModal}) => {
//   const [userValue, setUserValue] = useState({ firstName: null, lastName: null });
//   const createUser = ()=> {
//     console.log()
//   }
//   return (
//     <div className="form-create-user">
//       <form onSubmit={createUser}>
//         <div className="close" onClick={closeModal}>X</div>
//         <div>
//           <input type="text" placeholder="First Name" />
//         </div>
//         <div>
//           <input type="text" placeholder="Last Name" />
//         </div>
//         <button>Create</button>
//       </form>
//     </div>
//   )
// } 

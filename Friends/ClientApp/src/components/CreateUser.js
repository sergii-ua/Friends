// import React, { Component, useState } from 'react';
import React, { useState } from 'react';
// export class CreateUser extends Component {
//   //static displayName = CreateUser.name;

//   constructor(props) {
//     super(props);
//     this.state = { firstName: null, lastName: null };
//     this.createUser = this.createUser.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//     this.updateInputFirst = this.updateInputFirst.bind(this);
//     this.updateInputLast = this.updateInputLast.bind(this);
//   }

//   componentDidMount() {
//     //this.populateWeatherData();
//   }
// createUser () {
//   // const [firstName, setFirstName] = useState('');
//   // const [lastName, setLastName] = useState('');
//   const userObj = { firstName:this.state.firstName, lastName:this.state.lastName };
//     fetch('https://localhost:44332/api/User', {
//       method: 'POST',
//       headers: {"Content-Type": "application/json" },
//       body: JSON.stringify(userObj)
//     }).then(()=> {
//       console.log("a new user is created");
//     })
//   console.log('FORM SUBMIT');
// }

// handleClick(){
//   console.log('Success!')
// }

// updateInputFirst(event){
//   //this.setState({firstName : event.target.value})
//   console.log(this.state.firstName);
//   this.setState({firstName : event.target.value})
//   }
//   updateInputLast(event){
//     this.setState(prevValue=>{console.log(prevValue)});
//     }

//   render() {
//     const {closeModal}=this.props;
//     //console.log(closeModal);
//     return (
//       <div className="form-create-user">
//         <div className='button__container'>
//         <button className='button' onClick={this.handleClick}>
//           Click Me
//         </button>
//       </div>
//         <form onSubmit={this.createUser}>
//           <div className="close" onClick={closeModal}>X</div>
//           <div>
//             <input type="text" placeholder="First Name" onChange={this.updateInputFirst}/>
//           </div>
//           <div>
//             <input type="text" placeholder="Last Name" onChange={this.updateInputLast} />
//           </div>
//           <button>Create</button>
//         </form>
//       </div>
//     );
//   }
// }


export const CreateUser = ({closeModal, populateUserData}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const updateInputFirst = (event) => {
    //this.setState({firstName : event.target.value})
    
    setFirstName(event.target.value);
    console.log(firstName);
  }
  const updateInputLast = (event) => {
    setLastName(event.target.value);
    //this.setState(prevValue => { console.log(prevValue) });
  }
  const createUser = (event) => {
    event.preventDefault();
    const userObj = { firstName, lastName };
    fetch('https://localhost:44332/api/User', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userObj)
    }).then(() => {
      console.log("a new user is created");
      closeModal();
      populateUserData();
    })
    // console.log(userObj);
    // console.log('FORM SUBMIT');
  }
  return (
    <div className="form-create-user">
      <form onSubmit={createUser}>
        <div className="close" onClick={closeModal}>X</div>
        <div>
          <input type="text" placeholder="First Name" onChange={updateInputFirst} value={firstName} />
        </div>
        <div>
          <input type="text" placeholder="Last Name" onChange={updateInputLast} value={lastName} />
        </div>
        <button>Create</button>
      </form>
    </div>
  );
}

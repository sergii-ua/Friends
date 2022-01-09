import React, { Component, useState } from 'react';

export class CreateUser extends Component {
  //static displayName = CreateUser.name;

  constructor(props) {
    super(props);
    this.state = { firstName: null, lastName: null };
    this.createUser = this.createUser.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateInputFirst = this.updateInputFirst.bind(this);
    this.updateInputLast = this.updateInputLast.bind(this);
  }

  componentDidMount() {
    //this.populateWeatherData();
  }
createUser () {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  const userObj = { firstName:this.state.firstName, lastName:this.state.lastName };
    fetch('https://localhost:44332/api/User', {
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(userObj)
    }).then(()=> {
      console.log("a new user is created");
    })
  console.log('FORM SUBMIT');
}

handleClick(){
  console.log('Success!')
}

updateInputFirst(event){
  this.setState({firstName : event.target.value})
  }
  updateInputLast(event){
    this.setState({lastName : event.target.value})
    }

  render() {
    const {closeModal}=this.props;
    console.log(closeModal);
    return (
      <div className="form-create-user">
        <div className='button__container'>
        <button className='button' onClick={this.handleClick}>
          Click Me
        </button>
      </div>
        <form onSubmit={this.createUser}>
          <div className="close" onClick={closeModal}>X</div>
          <div>
            <input type="text" placeholder="First Name" onChange={this.updateInputFirst}/>
          </div>
          <div>
            <input type="text" placeholder="Last Name" onChange={this.updateInputLast} />
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

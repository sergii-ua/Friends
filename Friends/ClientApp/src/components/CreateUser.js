import React, { Component } from 'react';

export class CreateUser extends Component {
  //static displayName = CreateUser.name;

  constructor(props) {
    super(props);
    this.state = { firstName: null, lastName: null };
  }

  componentDidMount() {
    //this.populateWeatherData();
  }
createUser () {
  console.log()
}

  render() {
    const {closeModal}=this.props;
    console.log(closeModal);
    return (
      <div className="form-create-user">
        <form onSubmit={this.createUser}>
          <div className="close" onClick={closeModal}>X</div>
          <div>
            <input type="text" placeholder="First Name" />
          </div>
          <div>
            <input type="text" placeholder="Last Name" />
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

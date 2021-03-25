import React, {useReducer} from "react";
import useReducer from './UserReducer';
import UserContext from './UserContext';
import axios from 'axios';

const UserState = () => {
  const initialState = {
    users: [],
    selectedUser: null
  }
};
const [state,dispatch] = useState(useReducer, initialState) 

const getUsers = async () => {
  const res = await axios.get('https://reqres.in/api/users')
  console.log(res);
};

const getProfile = () => {};

return(
  <UserContext.Provider value={{
    users:state.users,
    selectedUser: state.selectedUser,
    getUsers,
    getProfile
  }}>
    {props.children}
  </UserContext.Provider>
)

export default UserState;

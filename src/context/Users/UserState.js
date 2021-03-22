import React, {useReducer} from "react";
import useReducer from './UserReducer'

const UserState = () => {
  const initialState = {
    users: [],
    selectedUser: null
  }
};
const [state,dispatch] = useState(useReducer, initialState) 

const getUsers = () => {};

const getProfile = () => {};

export default UserState;

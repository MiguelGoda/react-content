import React, { useReducer } from "react";
import axios from "axios";

import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import { GET_USERS ,GET_PROFILE } from "../types";

const UserState = (props) => {
  const initialState = {
    users: [],
    selectedUser: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUsers = async () => {
    const res = await axios.get("https://reqres.in/api/users");
    console.log(res.data.data);
    dispatch({
      type: GET_USERS,
      Payload: res.data.data,
    });
  };

  const getProfile = async (id) => {
    const res = await axios.get("https://reqres.in/api/users/" + id);
    dispatch({
      type: GET_PROFILE,
      Payload: res.data.data
    });
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getProfile,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;

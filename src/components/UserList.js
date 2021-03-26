import React, { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/Users/UserContext";

const UserList = () => {
  const { users, getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
    console.log(users);
  }, []);

  return <div>User List</div>;
};

export default UserList;

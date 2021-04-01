import React, { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/Users/UserContext";

const UserList = () => {
  const {users, getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
    console.log(users);
  }, []);

  return (
    // <div>
    //   {
    //     users.map(user => (
    //       <a href=""> {`${user.frist_name} ${user.last_name}`} </a>
    //     ))
    //   }
    // </div>
    <div>hola</div>
  );
};

export default UserList;

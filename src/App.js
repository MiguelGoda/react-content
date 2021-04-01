import "./App.css";

//components
import Profile from "./components/Profile";
import UserList from "./components/UserList";

//CONTEXT
import UserState from './context/Users/UserState'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <UserState>
      <UserList />
      <Profile />
    </UserState>
  );
}

export default App;

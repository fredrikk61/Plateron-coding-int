import React from "react";
import "./App.css";
import Login from './Login.jsx'
import UserData from './Store.js'

function App() {

    const [userDetails, setuserDetails] = useState({
    firstName:"",
    lastName:"",
    city:""
})

  return (
    <div className="App">
    <UserData.Provider value={userDetails, setuserDetails}>
      <Login />
    </UserData.Provider>
    </div>
  );
}

export default App;

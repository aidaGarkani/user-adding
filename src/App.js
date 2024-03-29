import React, { useState } from 'react';
import AddUser from './components/Users/AddUsers';
import UserList from './components/Users/UserList';
function App() {
  const [userList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.toString() }];
    });
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;

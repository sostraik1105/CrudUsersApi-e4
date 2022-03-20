import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { UsersForm } from "./components/UsersForm";
import { UsersList } from "./components/UsertsList";

export default function App() {
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);

  const findAll = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  const createUser = (newUser) => {
    axios
      .post("https://users-crud1.herokuapp.com/users/", newUser)
      .then(findAll);
  };

  const selectUser = (selectedUser) => setEdit(selectedUser);

  const updateUser = (updatedUser) => {
    axios
      .put(
        `https://users-crud1.herokuapp.com/users/${updatedUser.id}/`,
        updatedUser
      )
      .then(findAll);
  };

  const deleteUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(findAll);
  };

  return (
    <div className="App">
      <UsersForm 
        createUser={createUser}
        edit={edit}
        selectUser={selectUser}
        updateUser={updateUser}
        
      />

      <UsersList 
        users={users} 
        deleteUser={deleteUser}
        selectUser={selectUser}
      />
    </div>
  );
}


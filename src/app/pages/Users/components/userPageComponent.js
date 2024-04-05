"use client"

import React, { useState, useEffect } from 'react';
import Users from './Users';
import Header from '@/app/components/Header';
import AddUser from "./AddUser";
import axios from 'axios';

const baseUrl = "https://reqres.in/api/users?page=2";

export default function  UserPage  ()  {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(baseUrl)
      .then(res => setUsers(res.data.data))
      .catch(error => console.error(error));
  }, []);

  const handleAddUser = (newUser) => {
    const id = users.length + 1;
    newUser.id = id;
    setUsers([...users, newUser]);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleChangeUserInformation = (updatedUser) => {
    setUsers(
      users.map(user => user.id === updatedUser.id ? updatedUser : user)
    );
  };

  return (
    <div>
      <Header title={"Users"}/>
      <main>
        <Users users={users} onEdit={handleChangeUserInformation} onDelete={handleDeleteUser} />
      </main>
      <aside>
        <AddUser onAdd={handleAddUser} />
      </aside>
    </div>
  );
};


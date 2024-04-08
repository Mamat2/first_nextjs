"use client"

import React, { useState, useEffect } from 'react';
import Users from './Users';
import Header from '@/app/components/Header';

import axios from 'axios';
import TaskText from '@/app/components/TaskText';


const baseUrl = "https://jsonplaceholder.typicode.com/users";

export default function  UserPage  ()  {
  const [users, setUsers] = useState([]);
  const Text = ["Запросить всех пользователей с https://jsonplaceholder.typicode.com/, и отобразить их в виде таблицы.Таблица должна как минимум содержать столбцы name, email, city, phone, website, company.name.Добавить красивый CSS :));"];


  useEffect(() => {
    axios.get(baseUrl)
    .then(res => setUsers(res.data))
    .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <Header title={"dz feth"}/>
      <main>
        <TaskText text={Text}/>
        <Users users={users} />    
      </main>

    </div>
  );
};


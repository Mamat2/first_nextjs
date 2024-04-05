"use client"
import React, { useState } from 'react';
import AddUser from './AddUser';
import { CgInfinity } from "react-icons/cg";
import { IoHammerSharp } from "react-icons/io5";
import styles from "@/app/pages/Users/styles.module.css";

export default function User  ({ user, onDelete, onEdit })  {
  const [editForm, setEditForm] = useState(false);

  const handleDelete = () => {
    onDelete(user.id);
  };

  const toggleEditForm = () => {
    setEditForm(!editForm);
  };

  return (
    <div className={styles.user} key={user.id}>
      <CgInfinity onClick={handleDelete} className={styles.delite_icon} />
      <IoHammerSharp onClick={toggleEditForm} className={styles.edit_icon} />
      <p>{user.first_name} {user.last_name}</p>
      <img src={user.avatar} alt="avatar" />
      <p> {user.bio}</p>
      <p>is alive :{user.isAlive ? "yess" : "noo"}</p> 
      {editForm && <AddUser user={user} onAdd={onEdit} />}
    </div>
  );
};


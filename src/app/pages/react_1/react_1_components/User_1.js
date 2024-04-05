"use client"
import React from 'react';

export default function User_1  ({ user }) {
  const { name, email, phone, address, company } = user;

  const addressText = `${address.street}, ${address.suite}, ${address.city}`;

  return (
    <div className="user-card">
      <div className="user-card__header">
        <h3>{name}</h3>
      </div>
      <div className="user-card__body">
        <ul>
          <li><span>Email:</span> {email}</li>
          <li><span>Телефон:</span> {phone}</li>
          <li><span>Адрес: </span> {addressText}</li>
          <li><span>Компания:</span> {company.name}</li>
        </ul>
        <p title={address.zipcode}>
          {addressText}
        </p>
      </div>
    </div>
  );
};

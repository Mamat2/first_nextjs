import React, { useState, useRef } from 'react';



export default function AddUser({ user, onAdd }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    bio: '',
    isAlive: false,
  });

  const myFormRef = useRef(null);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckboxChange = (event) => {
    setFormData({
      ...formData,
      isAlive: event.target.checked,
    });
  };

  const handleReset = () => {
    setFormData({
      first_name: '',
      last_name: '',
      bio: '',
      isAlive: false,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      ...formData,
      ...(user && { id: user.id }), // Add ID if editing user
    };
    onAdd(newUser);
    handleReset();
  };

  return (
    <form ref={myFormRef}>
      <div className="form-group">
        <label htmlFor="first_name">Имя:</label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          placeholder="Введите имя"
          value={formData.first_name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="last_name">Фамилия:</label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          placeholder="Введите фамилию"
          value={formData.last_name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="bio">Биография:</label>
        <textarea
          name="bio"
          id="bio"
          placeholder="Расскажите о себе"
          value={formData.bio}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="status">Статус: Жив?</label>
        <input
          type="checkbox"
          id="status"
          checked={formData.isAlive}
          onChange={handleCheckboxChange}
        />
      </div>
      <button  type="submit" onClick={handleSubmit}>
        Добавить
      </button>
    </form>
  );
}
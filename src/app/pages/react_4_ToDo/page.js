
"use client"


import React, { useState } from 'react';
import Item from '@/app/pages/react_4_ToDo/react_4_Components/Item';
import Input from "@/app/pages/react_4_ToDo/react_4_Components/input";
import Header from "@/app/components/Header";
import TaskText from '@/app/components/TaskText';

export default function  ToDoList  ()  {
  const [items, setItems] = useState([
    { id: 0, text: 'Сделать уборку', completed: false },
    { id: 1, text: 'Купить продукты', completed: true },
  ]);

  const addItem = (newItem) => {
    const newId = Math.max(...items.map((item) => item.id)) + 1;
    setItems((prevItems) => [...prevItems, { ...newItem, id: newId }]);
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const Text = ["Реализовать на React TODO-List при помощи только ФУНКЦИОНАЛЬНЫХ компонент,(можно взять за основу css-код из https://codepen.io/Serg-Mt/pen/KKBqyKp?editors=0010)обязательный функционал:1) добавление новых пунктов можно реализовать также: 2) удаление пунктов (при нажатии на красный крестик) 3) перемещение пунктов (при нажатии на синие стрелочки) (не реализовано в примере) 4) удаление отмеченных пунктов (при нажатии на кнопку Удалить отмеченные). Создать отдельные компоненты для * элемента списка* поля ввода "];
  // const changeStatus = (id) => {
  //   console.log("sdf");
  //   setItems((prevItems) => {
  //     const updatedItems = [...prevItems];
  //     const itemIndex = updatedItems.findIndex((item) => item.id === id);

  //     if (itemIndex !== -1) {
  //       updatedItems[itemIndex].completed = !updatedItems[itemIndex].completed;
  //     }

  //     return updatedItems;
  //   });
  // };

  const changeStatus = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const moveUp = (id) => {
    const index = items.findIndex((item) => item.id === id);

    if (index > 0) {
      setItems((prevItems) => {
        const updatedItems = [...prevItems];
        const [currentItem, previousItem] = [updatedItems[index], updatedItems[index - 1]];
        updatedItems[index] = previousItem;
        updatedItems[index - 1] = currentItem;
        return updatedItems;
      });
    }
  };

  const moveDown = (id) => {
    const index = items.findIndex((item) => item.id === id);

    if (index < items.length - 1) {
      setItems((prevItems) => {
        const updatedItems = [...prevItems];
        const [currentItem, nextItem] = [updatedItems[index], updatedItems[index + 1]];
        updatedItems[index] = nextItem;
        updatedItems[index + 1] = currentItem;
        return updatedItems;
      });
    }
  };

  return (
    <main>
           <Header title={"react_4 to do list"}/>
           <TaskText text={Text} />
      <Input onAdd={addItem} />
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item
              item={item}
              onDelete={() => deleteItem(item.id)}
              onUp={() => moveUp(item.id)}
              onDown={() => moveDown(item.id)}
              status={changeStatus}
            />
          </li>
        ))}
      </ul>
    </main>
  );
   
};
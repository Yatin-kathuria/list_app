import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import List from 'Components/List/List';
import Input from 'Components/Input/Input';
import Button from 'Components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addList, deleteList } from 'store/listSlice';

const Dashboard = () => {
  const { lists } = useSelector((state) => state.listSlice);
  const dispatch = useDispatch();
  const [form, setForm] = useState({ list_title: '' });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddList = (e) => {
    if (!form.list_title) return;

    dispatch(addList(form.list_title));
    setForm((prev) => ({ ...prev, list_title: '' }));
  };

  const handleDeleteList = (id) => {
    dispatch(deleteList(id));
  };
  return (
    <div className={styles.root}>
      {lists.map((list) => (
        <List key={list.id} {...list} onDeleteList={handleDeleteList} />
      ))}
      <div className={styles.list_template}>
        <Input
          placeholder='Enter list Title'
          name='list_title'
          onChange={handleChange}
          value={form.list_title}
        />
        <Button onClick={handleAddList}>Add List</Button>
      </div>
    </div>
  );
};

export default Dashboard;

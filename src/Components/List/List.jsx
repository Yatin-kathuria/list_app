import Button from 'Components/Button/Button';
import Card from 'Components/Card/Card';
import Input from 'Components/Input/Input';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard, deleteCard } from 'store/listSlice';
import styles from './List.module.css';

const List = ({ title, cards, onDeleteList, id }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCard = (e) => {
    const { title, description } = form;
    if (!title || !description) return;

    dispatch(addCard({ listId: id, title, description }));
    setForm((prev) => ({ ...prev, title: '', description: '' }));
  };

  const handleDeleteCard = (cardId) => {
    dispatch(deleteCard({ listId: id, cardId }));
  };

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.iconContainer} onClick={() => onDeleteList(id)}>
          <i className='fa fa-times' aria-hidden='true'></i>
        </div>
      </div>
      <div className={styles.list_container}>
        {cards.map((card) => (
          <Card key={card.id} {...card} onDeleteCard={handleDeleteCard} />
        ))}
        <div className={styles.card_template}>
          <Input
            placeholder='Enter Title'
            name='title'
            onChange={handleChange}
            value={form.title}
          />
          <Input
            placeholder='Enter The Text for this card'
            name='description'
            onChange={handleChange}
            value={form.description}
          />
          <Button onClick={handleAddCard}>Add Card</Button>
        </div>
      </div>
    </div>
  );
};

export default List;

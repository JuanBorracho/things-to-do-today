import { useState } from 'react';

const AddListItem = ({ list, setList }) => {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addToList();
  };

  const addToList = () => {
    const id = list.length ? list[list.length - 1].id + 1 : 1;
    const newItemObj = { text: newItem, id: id, strikethrough: false };
    const newList = [...list, newItemObj];
    setList(newList);
  };

  return (
    <form className="AddListItem__form" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="AddListItem__input"
        type="text"
        name="add"
        autoFocus
        required
        value={newItem}
        placeholder="Add to your list here..."
        onFocus={(e) => (e.target.placeholder = '')}
        onBlur={(e) => (e.target.placeholder = 'Add to your list here...')}
        onChange={(e) => setNewItem(e.target.value)}
      ></input>
      <button className="AddListItem__button" type="submit">
        Add to list
      </button>
    </form>
  );
};

export default AddListItem;

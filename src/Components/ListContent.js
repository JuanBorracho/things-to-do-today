import List from './List';
import Congrats from './Congrats';
import EditListItem from './EditListItem';
import { useState } from 'react';

const ListContent = ({
  list,
  setList,
  initialMessage,
  showCongrats,
  removeFromList,
  toggleStrike,
  edit,
  setEdit,
}) => {
  const [updatedValue, setUpdatedValue] = useState('');
  const [itemToUpdate, setItemToUpdate] = useState({});

  const editItem = (item, formValue) => {
    setEdit(!edit);
    setUpdatedValue(formValue);
    setItemToUpdate(item);
  };

  return (
    <main className="ListContent">
      {edit ? (
        <EditListItem
          list={list}
          setList={setList}
          updatedValue={updatedValue}
          setUpdatedValue={setUpdatedValue}
          itemToUpdate={itemToUpdate}
          edit={edit}
          setEdit={setEdit}
        />
      ) : (
        <List
          list={list}
          removeFromList={removeFromList}
          toggleStrike={toggleStrike}
          editItem={editItem}
        />
      )}
      {showCongrats ? <Congrats /> : <p>{initialMessage}</p>}
    </main>
  );
};

export default ListContent;

const EditListItem = ({
  list,
  setList,
  updatedValue,
  setUpdatedValue,
  itemToUpdate,
  edit,
  setEdit,
}) => {
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    setEdit(!edit);
    const newList = list.map((item) => {
      if (item.id === itemToUpdate.id) {
        const updatedItem = { ...item, text: updatedValue };
        return updatedItem;
      } else {
        return item;
      }
    });
    setList(newList);
  };

  return (
    <form className="AddListItem__form" onSubmit={(e) => handleUpdateSubmit(e)}>
      <input
        className="AddListItem__input"
        type="text"
        value={updatedValue}
        autoFocus
        onChange={(e) => setUpdatedValue(e.target.value)}
      ></input>
      <button type="submit" className="AddListItem__button">
        Update
      </button>
    </form>
  );
};

export default EditListItem;

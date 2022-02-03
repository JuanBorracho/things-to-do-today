const AddListItem = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="AddListItem__form" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="AddListItem__input"
        type="text"
        name="add"
        autoFocus
        required
        placeholder="Add to your list here..."
      ></input>
      <button className="AddListItem__button" type="submit">
        Add to list
      </button>
    </form>
  );
};

export default AddListItem;

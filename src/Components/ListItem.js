import { FaTrash, FaEdit } from 'react-icons/fa';

const ListItem = ({ item, removeFromList, toggleStrike, editItem }) => {
  return (
    <li className="ListItem" onDoubleClick={() => toggleStrike(item.id)}>
      <div className="ListItem__left">
        <FaEdit
          className="ListItem__edit"
          role="button"
          onClick={() => editItem(item, item.text)}
        />
        <h2
          className="ListItem__text"
          style={
            item.strikethrough
              ? { textDecoration: 'line-through', color: '#E8758C' }
              : null
          }
        >
          {item.text}
        </h2>
      </div>
      <FaTrash
        className="ListItem__trash"
        role="button"
        onClick={() => removeFromList(item.id)}
      />
    </li>
  );
};

export default ListItem;

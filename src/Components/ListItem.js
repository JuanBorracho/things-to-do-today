import { FaTrash } from 'react-icons/fa';

const ListItem = ({ item, removeFromList, toggleStrike }) => {
  return (
    <li className="ListItem" onDoubleClick={() => toggleStrike(item.id)}>
      <h2
        className="ListItem__text"
        style={
          item.strikethrough
            ? { 'text-decoration': 'line-through', color: '#A6D9A6' }
            : null
        }
      >
        {item.text}
      </h2>
      <FaTrash
        className="ListItem__trash"
        role="button"
        onClick={() => removeFromList(item.id)}
      />
    </li>
  );
};

export default ListItem;

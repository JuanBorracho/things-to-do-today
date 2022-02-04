import { FaTrash } from 'react-icons/fa';

const ListItem = ({ item, removeFromList }) => {
  return (
    <li className="ListItem">
      <h2 className="ListItem__text">{item.text}</h2>
      <FaTrash
        className="ListItem__trash"
        role="button"
        onClick={() => removeFromList(item.id)}
      />
    </li>
  );
};

export default ListItem;

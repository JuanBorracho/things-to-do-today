import { FaTrash } from 'react-icons/fa';

const ListItem = ({ item }) => {
  return (
    <li className="ListItem">
      <h2 className="ListItem__text">{item.text}</h2>
      <FaTrash className="ListItem__trash" />
    </li>
  );
};

export default ListItem;

import ListItem from './ListItem';

const List = ({ list, removeFromList }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem item={item} key={item.id} removeFromList={removeFromList} />
      ))}
    </ul>
  );
};

export default List;

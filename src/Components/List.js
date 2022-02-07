import ListItem from './ListItem';

const List = ({ list, removeFromList, toggleStrike }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem
          item={item}
          key={item.id}
          removeFromList={removeFromList}
          toggleStrike={toggleStrike}
        />
      ))}
    </ul>
  );
};

export default List;

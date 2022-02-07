import ListItem from './ListItem';

const List = ({ list, removeFromList, toggleStrike, editItem }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem
          id={item.id}
          item={item}
          key={item.id}
          removeFromList={removeFromList}
          toggleStrike={toggleStrike}
          editItem={editItem}
        />
      ))}
    </ul>
  );
};

export default List;

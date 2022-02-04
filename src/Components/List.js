import ListItem from './ListItem';

const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default List;
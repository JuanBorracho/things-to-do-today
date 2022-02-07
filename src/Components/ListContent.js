import List from './List';
import Congrats from './Congrats';

const ListContent = ({
  list,
  initialMessage,
  showCongrats,
  removeFromList,
  toggleStrike,
}) => {
  return (
    <main className="ListContent">
      {showCongrats ? <Congrats /> : <p>{initialMessage}</p>}
      <List
        list={list}
        removeFromList={removeFromList}
        toggleStrike={toggleStrike}
      />
    </main>
  );
};

export default ListContent;

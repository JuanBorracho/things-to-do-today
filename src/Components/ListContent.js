import List from './List';
import Congrats from './Congrats';

const ListContent = ({
  list,
  initialMessage,
  showCongrats,
  removeFromList,
}) => {
  return (
    <main className="ListContent">
      {showCongrats ? <Congrats /> : <p>{initialMessage}</p>}
      <List list={list} removeFromList={removeFromList} />
    </main>
  );
};

export default ListContent;

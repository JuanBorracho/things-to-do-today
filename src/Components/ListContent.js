import List from './List';
import Congrats from './Congrats';

const ListContent = ({ list, initialMessage, showCongrats }) => {
  return (
    <main>
      {showCongrats ? <Congrats /> : <p>{initialMessage}</p>}
      <List list={list} />
    </main>
  );
};

export default ListContent;

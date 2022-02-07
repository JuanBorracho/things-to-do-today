import { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AddListItem from './Components/AddListItem';
import ListContent from './Components/ListContent';

function App() {
  const [list, setList] = useState([]);
  const [initialMessage, setInitialMessage] = useState('Your list is empty');
  const [showCongrats, setShowCongrats] = useState(false);

  const removeFromList = (id) => {
    const newList = list.filter((item) => {
      return item.id !== id;
    });

    if (list.length > 1) {
      setList(newList);
    } else {
      setList(newList);
      setShowCongrats(true);
    }
  };

  const toggleStrike = (id) => {
    const newList = list.map((item) =>
      item.id === id ? { ...item, strikethrough: !item.strikethrough } : item
    );

    setList(newList);
  };

  return (
    <div className="App">
      <div className="inner-container">
        <Header />
        <AddListItem
          list={list}
          setList={setList}
          setInitialMessage={setInitialMessage}
          setShowCongrats={setShowCongrats}
        />
        <ListContent
          initialMessage={initialMessage}
          list={list}
          setList={setList}
          showCongrats={showCongrats}
          removeFromList={removeFromList}
          toggleStrike={toggleStrike}
        />
        <Footer list={list} />
      </div>
    </div>
  );
}

export default App;

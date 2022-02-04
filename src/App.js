import { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AddListItem from './Components/AddListItem';
import ListContent from './Components/ListContent';

function App() {
  const [list, setList] = useState([]);
  const [initialMessage, setInitialMessage] = useState('Your list is empty');
  const [showCongrats, setShowCongrats] = useState(false);

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
          showCongrats={showCongrats}
        />
        <Footer list={list} />
      </div>
    </div>
  );
}

export default App;

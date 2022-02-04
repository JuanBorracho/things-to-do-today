import { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AddListItem from './Components/AddListItem';
import ListContent from './Components/ListContent';

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <div className="inner-container">
        <Header />
        <AddListItem list={list} setList={setList} />
        <ListContent list={list} />
        <Footer list={list} />
      </div>
    </div>
  );
}

export default App;

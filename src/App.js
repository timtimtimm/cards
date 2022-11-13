import s from './App.module.css';
import Header from './components/header/Header';
import Dictionary from './components/dictionary/Dictionary';
import Cards from './components/cards/Cards';
import { useSelector } from 'react-redux';

function App() {

  const togle = useSelector(state => state.dictionary.dictionarySwitch);

  return (
    <div className={s.wrapper}>
      <Header />
      {togle ? <Dictionary />
        : <Cards />}

    </div>
  );
}

export default App;

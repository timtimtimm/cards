import s from './App.module.css';
import Header from './components/header/Header';
import Dictionary from './components/dictionary/Dictionary';
import Cards from './components/cards/Cards';

function App() {

  let togle = true;
  return (
    <div className={s.wrapper}>
      <Header />
      {togle ? <Dictionary />
        : <Cards />}

    </div>
  );
}

export default App;

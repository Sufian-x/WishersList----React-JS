import './App.css';
import { useState } from 'react';
import Input from './Input'
import Wish from './wish'

const App = () => {

  const [wishes, setWishes] = useState([]);

  const addWish = (wish, pr) => {
    let id = 1;
    if (wishes.length > 0) {
      id = wishes.length + 1;
    }
    let w = { id: id, text: wish, pr: pr };
    //console.log(w);
    setWishes([...wishes, w]);
    console.log(wishes);
  }

  const removeWish = (id) => {
    let newWishes = [...wishes].filter((w) => w.id !== id)
    setWishes(newWishes)
  }

  const sort = () => {
    let sortedWishes = [...wishes].sort((a, b) => {
      return b.pr - a.pr;
    });
    setWishes(sortedWishes);
  }

  return (

    <>
      <div><span className='title'>WishersList</span></div>

      <div className="container">
        <Input addWish={addWish} />
        <div className='wishes'>
          {wishes.map((item, i) => {
            return (
              <Wish item={item} key={i} removeWish={removeWish} />
            )
          })}

        </div>


        <button onClick={sort}>Sort</button>
      </div>
    </>

  );
}

export default App;
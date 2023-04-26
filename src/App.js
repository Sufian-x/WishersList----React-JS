import './App.css';
import { useEffect, useState } from 'react';
import Input from './Input'
import Wish from './wish'

const App = () => {

  const getWishes=()=>{
    const a = localStorage.getItem("wish");
    if(a)
    {
      return JSON.parse(a);
    }
    else{
      return [];
    }
  }
  const [wishes, setWishes] = useState(getWishes);

  useEffect(()=>{
    localStorage.setItem("wish", JSON.stringify(wishes))
  },[wishes])

  const addWish = (wish, pr) => {
    let id = 1;
    if (wishes.length > 0) {
      id = wishes.length + 1;
    }
    let w = { id: id, text: wish, pr: pr };
    setWishes([...wishes, w]);
    console.log(wishes);
  }

  const removeWish = (id) => {
    let newWishes = [...wishes].filter((w) => w.id !== id)
    setWishes(newWishes)
  }

  const moveTop = (i)=>{
    console.log(i)
    const newWishes = [...wishes];
    const ind = newWishes.splice(i, 1);
    newWishes.unshift(ind[0]);
    setWishes(newWishes);
  }

  const addPr = (id) => {
    wishes.forEach((item) => {
      if(item.id === id)
      {
        item.pr++;
        sort();
      }
    })}
  
    const subPr = (id) => {
      wishes.forEach((item) => {
        if(item.id === id && item.pr > 0)
        {
          item.pr--;
          sort();
        }
      })}  

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
              <Wish item={item} i={i} removeWish={removeWish} moveTop={moveTop} addPr={addPr} subPr={subPr} />
            )
          })}

        </div>
          <div className='sort-div'>
            <button className='sort-btn' onClick={sort}>Sort</button>
          </div>
      </div>
    </>

  );
}

export default App;
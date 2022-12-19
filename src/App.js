
import './index.scss';
import axios from 'axios';
import React from "react";
import Card from './components/Card';
import * as _ from 'lodash';
import Loader from './components/Loader';


function App() {
  
  const [isLoading, setIsLoading] = React.useState(false);
  const [items, setItems]=React.useState([]);
  const [directionSort, setDirectionSort]=React.useState(true);
  const [directionSortByName, setDirectionSortByName]=React.useState(true);

  React.useEffect(() => {

    const getItems = async () => {
      setIsLoading(true);
      const config={
        headers:{
          'accept':'application/json',
          'Authorization':'ers45bsGH^)()Hhj'
        }
      }
      const res = await axios.get('https://api.vitamin.trade/SupplementsList',config);
      const resData = res.data;
      setItems(resData.SupplementsList);
      setIsLoading(false);
    }
    getItems();    
  }, [])

  function sortItems(){
    let sortedByPrice;

    if (directionSort) {
      sortedByPrice=_.orderBy(items,['CurrentPrices'],['ask']);
      setItems(sortedByPrice);
      
    } else {
      sortedByPrice=_.orderBy(items,['CurrentPrices'],['desc']);
      setItems(sortedByPrice);
      
    }
    setDirectionSort(!directionSort);
  }

  function sortByName(){
    let sortedByName;
    if (directionSortByName) {
      sortedByName=_.orderBy(items,['GoodsCommercialName'],['ask']);
      setItems(sortedByName);
      
    } else {
      sortedByName=_.orderBy(items,['GoodsCommercialName'],['desc']);
      setItems(sortedByName);
      
    }
    setDirectionSortByName(!directionSortByName);
  }

  if (isLoading) {
    return <Loader/>
  }



  return (
    <div className="App">
      <aside className='left__sidebar'>
left sidebar
      </aside>
      <section className='catalog'>
        <div className='catalog__header header'>
          <div className='header__subject'>
            <div className='header__subject__text'>
              <h1>Биодобавка</h1>
            </div>
            <div class="header__subject__sort" onClick={sortByName}>
              <span></span>
            </div>
          </div>
          <div className='header__description'>
            <h1>Описание</h1>
          </div>
          <div className='header__price'>
            <div className='header__price__text'>
              <h1>Цена за шт., р</h1>
            </div>
            <div class="header__price__sort" onClick={sortByName}>
              <span></span>
            </div>
          </div>
        </div>
        {items.map((obj, index)=>
          <Card 
            picture={obj.Picture}
            title={obj.GoodsCommercialName}
            description={obj.CommercialDescription}
            price={obj.CurrentPrices}
            sort={sortItems}
          />)}
      </section>
      <aside className='left__sidebar'>
right sidebar
      </aside>
    </div>
  );
}

export default App;

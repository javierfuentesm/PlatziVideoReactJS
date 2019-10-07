/* eslint-disable jsx-quotes */
import React from 'react';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import useInitialState from '../hooks/UseIninitalState';

const API = 'http://localhost:3000/initialState';
const Home = () => {
  const initialState = useInitialState(API);

  return (
    <>
      <Search />
      {initialState.mylist.lenght > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {initialState.mylist.map((item) => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Categories title="Originales de PlatziVideo">
        <Carousel>
          {initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </>
  );
};

export default Home;

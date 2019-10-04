/* eslint-disable jsx-quotes */
import React from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Footer from '../components/Footer';

const App = () => (
  <div className="App">
    <Header />
    <Search />
    <Categories title="Mi lista">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>
    <Categories title="Tendencias">
      <Carousel>
        <CarouselItem />
       
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>
    <Categories title="Originales de PlatziVideo">
      <Carousel>
        <CarouselItem />
       
      </Carousel>
    </Categories>
    <Footer />
  </div>
);

export default App;

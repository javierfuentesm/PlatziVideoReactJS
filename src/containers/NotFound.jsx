import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <section className='error'>
    <section className='error__container'>
      <h1 className='error__container--404'>404</h1>
      <p className='error__container--title'>Página no encontrada</p>
    </section>
  </section>
);

export default NotFound;

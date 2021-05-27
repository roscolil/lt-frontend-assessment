import React from 'react';
import './Container.scss';
import Header from '../Header/Header';
import Wrapper from '../Wrapper/Wrapper';
import Footer from '../Footer/Footer';

const Container = () => {
  return (
    <div className="container">
      <Header />
      <Wrapper />
      <Footer />
    </div>
  )
}

export default Container
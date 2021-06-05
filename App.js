import React from 'react';
import Main from './src/components/Main';
import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';

export default function App() {
  return (
    <React.Fragment>
      <Navbar title='Calcula el precio de USD A BSS' />
      <Main />
      <Footer title='Desarrollado por Brian Santeliz' />
    </React.Fragment>
  );
}

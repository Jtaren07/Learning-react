import Contact from './Contact';
import React from "react";
import './App.css';

function App() {
  return (
    <div className="contacts">
      <Contact
        img="./images/mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="whiskers@meow.com"
      />
      <Contact  
        img="./images/fluffykins.png"
        name="Fluffykins"
        phone="(310) 555-6789"
        email="fluffernutter@meow.com"
      />
      <Contact
        img="./images/felix.png"
        name="Felix"
        phone="(415) 555-0123"
        email="paws@meow.com"
      />
      <Contact
        img="./images/pumpkin.png"
        name="Pumpkin"
        phone="(212) 555-5678"
        email="mittens@meow.com"
      />
    </div>
  );
}

export default App;


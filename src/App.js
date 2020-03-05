import React from 'react';
import './App.css';
import './components/Forecast/Forecast.js';
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
      <div className="App">
          <header>
              <h1>Моя погода</h1>
              <div className="weather-icon">
                  <img src="https://lh3.googleusercontent.com/proxy/3BAKLb_hmRqGa---QiGJ5Lo7hWnPEro6GsDDd68kcoYa-FwRKlbkQeCsPEbl4aQAWQuu4YjAtqhT9FqXjL3pATguiOXYaPSESsixxeAuv9W4qM0eBYAPvHu6ZSFWtD58LeDm8JTBaFypNAJ64kq9VePq25xeGf29uQ" alt=""/>
              </div>
          </header>
          <main>
              <Forecast />
          </main>
          <footer>
              <h5>Developed by SentDyem in 2020</h5>
          </footer>
      </div>
  );
}

export default App;

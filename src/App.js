import React from 'react';
import './App.css';

const api =
    {
      key: "2c72cae3d465a6dae1d5911721e4f54c",
      base: "http://api.openweathermap.org/data/2.5/"
    }

function App() {
  return (
      <div className="info">
          <main>
              <h1>React погода</h1>
          </main>
          <footer>
              <h5>Приложение было разработано в 2020 году</h5>
          </footer>
      </div>
  );
}

export default App;

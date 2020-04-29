import React, { useState, useEffect } from 'react';
import './App.scss';

const App = () => {
  const [quote, setState] = useState({});
 
  const getQuote = () => {
    fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
      .then(response => response.json())
      .then(data => {
        setState({
          ...quote,
          quote: data
        })
     });
  };

  useEffect(getQuote, []);
  
  return (
    <div className="App">
      <div id="quote-box"> 
        <main>
        {quote.quote &&   
          <div className="display_quote">
            <p id="text">"{quote.quote.en}"</p>
            <p id="author">{quote.quote.author}</p>
          </div>
        }
        <div className="display_buttons">
          <a id="tweet-quote" href="https://www.twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>          
          <button id="new-quote" onClick={getQuote}>new quote</button>
        </div>
        <div className="code">
          <a href="https://github.com/FilipeMts/FCC-Random-Quote-Machine.git" target="_blank" rel="noopener noreferrer">code is available here</a>
        </div>        
        </main>
      </div>
    </div>
  );
};

export default App;

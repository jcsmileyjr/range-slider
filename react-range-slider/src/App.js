import './App.css';

/**
 * Simple React project featuring a range input displaying a dollar amount
 * 
 * TODO - Setup the layout (background and center div) - DONE
 * TODO - Setup basic HTML elements for the project - DONE
 * TODO - Setup basic styling of the project
 * TODO - Setup basic functionlaity of the project
 * TODO - Fix issues
 * TODO - Setup basic README of the project
 */
function App() {
  return (
    <div className="App">
        <main>
            <h1><span className="range__amountDollarSign--style">$</span> 16.00</h1>
            <input className="range__inputRange--style" type="range" min="1" max="20" value="0" />
            <button className="range__buyButton--style" type="button">Buy Now</button>
        </main>
    </div>
  );
}

export default App;

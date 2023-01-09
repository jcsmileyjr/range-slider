import "./App.css";
import {useState} from 'react';

/**
 * Simple React project featuring a range input displaying a dollar amount
 *
 * TODO - Setup the layout (background and center div) - DONE
 * TODO - Setup basic HTML elements for the project - DONE
 * TODO - Setup basic styling of the project
 * TODO - Setup basic functionlaity of the project
 *  onmousemove()
 * TODO - Fix issues
 * TODO - Setup basic README of the project
 */
function App() {
  const [value, setValue] = useState(10);
  const MAX = 20;
  const getBackgroundSize = () => {
    console.log(value);
    return {
      backgroundSize: `${(value * 100) / MAX}% 100%`,
    };
  };

  return (
    <div className="App">
      <main>
        <h1>
          <span className="range__amountDollarSign--style">$</span>{value}.00
        </h1>
        <input
          className="range__inputRange--style"
          style={getBackgroundSize()}
          type="range"
          min="1"
          max="20"
          step="1"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="range__buyButton--style" type="button">
          Buy Now
        </button>
      </main>
    </div>
  );
}

export default App;

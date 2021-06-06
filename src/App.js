import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    data: [
      { name: "Learn React", active: true },
      { name: "Drink Tea", active: false },
      { name: "Drink Coffee", active: false },
    ],
  };

  updateState(idx) {
    const arr = this.state.data;
    const result = arr.map((el, i) => {
      return idx === i ? { ...el, active: true } : el;
    });
    this.setState({ data: result });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <ul>
          {data.map((el, i) => {
            return el.active ? (
              <li key={i}>{el.name}</li>
            ) : (
              <li key={i} className="disabled">
                {el.name}{" "}
                <button onClick={() => this.updateState(i)}>Активировать</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
      message: ""
  };

  componentDidMount(): void {
    setInterval(this.springData,250);
  }

  springData = (): void => {
    fetch('/api/live/date')
        .then(res => res.text())
        .then(message => {
          this.setState({message: message});
        });
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1>{this.state.message}</h1>
          </header>
        </div>
    );
  }

}

export default App;

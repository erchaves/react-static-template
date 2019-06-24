import React from 'react';
import './index.scss';
import logo from '../../logo.png'

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/Components/App/index.js</code> and save to reload.
          </p>
          <span>
            Learn{' '}
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>{' '}
            and{' '}
            <a
              className="App-link"
              href="https://react-static.js.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Static
            </a>
          </span>
        </header>
      </div>
    )
  }
}

export default Home;

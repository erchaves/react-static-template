import React, { Component } from 'react'
import { Root, Routes } from 'react-static'
import './index.scss'

class App extends Component {
  render() {
    return (
      <React.Suspense fallback={<span>Loading...</span>}>
        <Root>
          <Routes />
        </Root>
      </React.Suspense>
    )
  }
}

export default App

import React, { Component } from 'react';
import '../css/App.css';
import ApplicationHeader from './ApplicationHeader'
import NewsItem from './NewsItem'
class App extends Component {
  render() {
    return (
      <div className="App">
        <ApplicationHeader> </ApplicationHeader>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
      </div>
    );
  }
}

export default App;

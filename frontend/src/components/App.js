import React, { Component } from 'react';
import '../css/App.css';
import ApplicationHeader from './ApplicationHeader';
import PostList from './PostList';
class App extends Component {
 state={
     posts:[]
 }
 render() {
     return (
         <div className="App">
             <ApplicationHeader/>
             <div/>
             <hr/>
             <PostList/>
         </div>
     );
 }
}
export default App;

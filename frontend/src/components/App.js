import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import PostList from './PostList';
import PostDetailView from './PostDetailView';
import AddNewPost from './AddNewPost';
import ApplicationHeader from './ApplicationHeader';
import NoMatchFound from './NoMatchFound';
import '../css/App.css';
class App extends Component {
    render() {
        return (
            <div className="App">
                <ApplicationHeader/>
                <br/>
                <div className="AppBody">
                    <Switch>
                        <Route exact path="/" render={()=>(
                            <PostList category=""/>
                        )}/>
                        <Route exact path="/categories/:categoryName" render={({match})=>{
                            return (
                                <PostList category={match.params.categoryName}/>
                            )}}/>
                        <Route exact path="/post/:uid" component={PostDetailView}/>
                        <Route exact path="/addpost" component={AddNewPost} />
                        <Route path="*" component={NoMatchFound} />
                    </Switch>
                </div>
            </div>
        );
    }
}
export default App;

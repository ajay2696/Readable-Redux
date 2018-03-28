import React,{Component} from 'react';
import {connect} from 'react-redux';
import {upVote,unVote} from '../actions/Actions'
import Post from './Post';

class PostList extends Component{
    render(){
        return (
            <div>
                {this.props.posts.map((post)=>{
                    return (
                        <Post key={post.id}
                            post={post}
                            upVote={this.props.upVote}
                            unVote={this.props.unVote}/>)
                })}
            </div>);
    }
}

function mapStateToProps(state){
    return {posts:state.posts};
}
function mapDispatchToProps(dispatch){
    return {
        upVote:(postID)=>dispatch(upVote(postID)),
        unVote:(postID)=>dispatch(unVote(postID))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostList);

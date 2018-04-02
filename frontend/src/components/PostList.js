import React,{Component} from 'react';
import {connect} from 'react-redux';
import {upVote,unVote} from '../actions/Actions'
import Post from './Post';
import * as ReadbleAPI from '../util/ReadableAPI';

class PostList extends Component{
    state={
        posts:[]
    }
    upVoteAPI=(postID)=>{
        console.log(postID);
        ReadbleAPI.vote(postID,'upVote').then(this.props.upVote(postID));
    }
    unVoteAPI=(postID)=>{
        ReadbleAPI.vote(postID,'downVote').then(this.props.unVote(postID));
    }
    componentWillMount(){
        let posts=this.props.posts.slice(0);
        console.log('component will mount')
        posts.sort(function(post1,post2){
            return post1.voteScore-post2.voteScore;
        });
        this.setState({posts});
    }

    changeSortOrder(e){
        let posts=this.state.posts.slice(0);
        let sortOrder =e.target.value;
        if(sortOrder==='votes'){
            posts.sort(function(post1,post2){
                return post1.voteScore-post2.voteScore;
            });
        } else{
            posts.sort(function(post1,post2){
                return post1.commentCount-post2.commentCount;
            });
        }
        this.setState({posts});
    }
    render(){
        let category =this.props.category;
        let posts;
        if(category){
            posts=this.state.posts.filter((post)=>post.category===category)
        } else{
            posts=this.state.posts.slice(0);
        }
        return (
            <div>
                <div align="center">Sort By:
                    <select onChange={(e)=>{this.changeSortOrder(e)}}>
                        <option value="votes">Vote Score</option>
                        <option value="comments">No Of Comments</option>
                    </select>
                </div>
                <hr/>
                {posts.map((post)=>{
                    return (
                        <Post key={post.id}
                            post={post}
                            upVote={this.upVoteAPI}
                            unVote={this.unVoteAPI}/>)
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

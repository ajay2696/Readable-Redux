import React,{Component} from 'react';
import {connect} from 'react-redux';
import {votePost,fetchALLPosts,deletePost,editPost} from '../actions/Posts'
import Post from './Post';
import * as PostsAPI from '../util/PostsAPI';

class PostList extends Component{
    state={
        sortOrder:'voteScore'
    }
    componentWillMount(){
        PostsAPI.getAllPosts().then((posts)=>this.props.fetchALLPosts(posts))
        this.setState(Object.assign({sortOrder:'voteScore'}));
    }
    votePost=(postID,option)=>{
        PostsAPI.votePost(postID,option).then(this.props.votePost(postID,option));
    }
    changeSortOrder(e){
        this.setState(Object.assign({sortOrder:e.target.value}));
    }
    deletePost=(postID)=>{
        PostsAPI.deletePost(postID).then((postID)=>this.props.deletePost(postID));
    }
    editPost=(post)=>{
        PostsAPI.editPost(post).then((res)=>{
            this.props.editPost(post);
        })
    }

    render(){
        let category =this.props.category;
        let posts;
        let sortOrder =this.state.sortOrder;
        if(category){
            posts=this.props.posts.filter((post)=>post.category===category)
        } else{
            posts=this.props.posts.slice(0);
        }

        if(sortOrder==='voteScore'){
            posts.sort(function(post1,post2){
                return post1.voteScore-post2.voteScore;
            });
        } else{
            posts.sort(function(post1,post2){
                return post1.commentCount-post2.commentCount;
            });
        }

        return (
            <div>
                <div align="center">Sort By:
                    <select onChange={(e)=>{this.changeSortOrder(e)}}>
                        <option value="voteScore">Vote Score</option>
                        <option value="comments">No Of Comments</option>
                    </select>
                </div>
                <hr/>
                {posts.map((post)=>{
                    return (
                        <Post key={post.id}
                            post={post}
                            editPost={this.editPost}
                            votePost={this.votePost}
                            deletePost={this.deletePost}/>)
                })}
            </div>);
    }
}

function mapStateToProps(state){
    return {
        posts:state.posts.filter((post)=>post.deleted===false)
    };
}
function mapDispatchToProps(dispatch){
    return {
        votePost:(postID,option)=>dispatch(votePost(postID,option)),
        fetchALLPosts:(posts)=>dispatch(fetchALLPosts(posts)),
        deletePost:(post)=>dispatch(deletePost(post)),
        editPost:(post)=>dispatch(editPost(post))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostList);

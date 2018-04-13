import React,{Component} from 'react';
import {connect} from 'react-redux';
import {votePost,fetchALLPosts,deletePost,editPost} from '../actions/Posts'
import Post from './Post';
import PropTypes from 'prop-types';

class PostList extends Component{
    state={
        sortOrder:'voteScore'
    }
    componentWillMount(){
        this.props.fetchALLPosts();
        this.setState(Object.assign({sortOrder:'voteScore'}));
    }
    changeSortOrder(e){
        this.setState(Object.assign({sortOrder:e.target.value}));
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
                        <option value="voteScore">Vote Score(low to high)</option>
                        <option value="comments">No Of Comments(low to high)</option>
                    </select>
                </div>
                <hr/>
                {posts.map((post)=>{
                    return (
                        <Post key={post.id}
                            post={post}
                            editPost={this.props.editPost}
                            votePost={this.props.votePost}
                            deletePost={this.props.deletePost}/>)
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
        fetchALLPosts:()=>dispatch(fetchALLPosts()),
        deletePost:(postId)=>dispatch(deletePost(postId)),
        editPost:(post)=>dispatch(editPost(post))
    }
}
PostList.propTypes={
    posts:PropTypes.array,
    category:PropTypes.string,
    votePost:PropTypes.func.isRequired,
    fetchALLPosts:PropTypes.func.isRequired,
    deletePost:PropTypes.func.isRequired,
    editPost:PropTypes.func.isRequired
}
export default connect(mapStateToProps,mapDispatchToProps)(PostList);

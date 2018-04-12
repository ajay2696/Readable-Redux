import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getComments,voteComment,editComment,deleteComment,addComment} from '../actions/Comments';
import {votePost,loadPost,deletePost,editPost} from '../actions/Posts';
import Comment from './Comment';
import Post from './Post';
import AddNewComment from './AddNewComment';
class PostDetailView extends Component{
    componentWillMount(){
        let postID=this.props.match.params.uid;
        this.props.loadPost(postID);
        this.props.getComments(postID);
    }

    render(){
        const post =this.props.post;
        if(typeof post==='undefined'){
            return <div> </div>
        } else {
            return (
                <div>
                    <Post post={this.props.post}
                        votePost={this.props.votePost}
                        editPost={this.props.editPost}
                        deletePost={this.props.deletePost}
                    />
                    {this.props.comments.map((comment)=>{
                        return <Comment key={comment.id} comment={comment}
                            deleteComment={this.props.deleteComment}
                            voteComment={this.props.voteComment}
                            editComment={this.props.editComment}
                        />;
                    })}
                    <AddNewComment post={this.props.post}
                        addComment={this.props.addComment}/>
                </div>);
        }
    }
}

function mapStateToProps(state,ownProps){
    let postID =ownProps.match.params.uid;
    return {
        post:state.posts.find(function(post){return post.id===postID}),
        comments:state.comments.filter((comment)=>comment.deleted===false)
    }
}

function mapDispatchToProps(dispatch){
    return{
        getComments:(comments)=>dispatch(getComments(comments)),
        addComment:(comment)=>dispatch(addComment(comment)),
        voteComment:(commentID,option)=>dispatch(voteComment(commentID,option)),
        deleteComment:(commentID,postID)=>dispatch(deleteComment(commentID,postID)),
        editComment:(comment)=>dispatch(editComment(comment)),
        votePost:(postID,option)=>dispatch(votePost(postID,option)),
        loadPost:(post)=>dispatch(loadPost(post)),
        editPost:(post)=>dispatch(editPost(post)),
        deletePost:(postID)=>dispatch(deletePost(postID))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostDetailView);

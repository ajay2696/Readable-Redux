import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getComments,voteComment,editComment,deleteComment,addComment} from '../actions/Comments';
import {votePost,loadPost} from '../actions/Posts';
import * as CommentsAPI from '../util/CommentsAPI';
import * as PostsAPI from '../util/PostsAPI';
import Comment from './Comment';
import Post from './Post';
import serializeForm from 'form-serialize';
import UUID from 'node-uuid';

class PostDetailView extends Component{
    componentWillMount(){
        let postID=this.props.match.params.uid;

        PostsAPI.loadPost(postID)
            .then((post)=>this.props.loadPost(post));

        CommentsAPI.fetchPostComments(postID)
            .then((comments)=>{
                let commentsArray=Object.values(comments);
                this.props.getComments(commentsArray);
            });
    }
    postComment=(e)=>{
        e.preventDefault();
        const values=serializeForm(e.target,{hash:true});
        let commentID =UUID.v4();
        let timestamp= Date.now();
        let parentId=this.props.post.id;
        const comment=Object.assign(values,{id:commentID},
            {timestamp},
            {deleted:false},
            {parentDeleted:false},{parentId}
        );
        CommentsAPI.postComment(comment)
            .then((result)=>this.props.addComment(result));
        e.target.reset();
    }
    voteComment=(commentID,option)=>{
        CommentsAPI.voteComment(commentID,option)
            .then(this.props.voteComment(commentID,option));
    }
    deleteComment=(commentID,postID)=>{
        CommentsAPI.deleteComment(commentID)
            .then(this.props.deleteComment(commentID,postID));
    }
    votePost=(postID,option)=>{
        PostsAPI.votePost(postID,option).then(this.props.votePost(postID,option));
    }

    render(){
        const post =this.props.post;
        if(typeof post==='undefined'){
            return <div> </div>
        } else {
            return (
                <div>
                    <h3>is Post Detail</h3>
                    <Post post={this.props.post}  votePost={this.votePost}/>
                    <hr/>
                    {this.props.comments.map((comment)=>{
                        return <Comment key={comment.id} comment={comment}
                            deleteComment={this.deleteComment}
                            voteComment={this.voteComment}
                        />;
                    })}
                    <hr/>
                    <div>
                        <form className="add-comment" method="POST" onSubmit={this.postComment} ref="commentform">
                            <input type="text" name="author" placeholder="Author" />
                            <textarea name="body" placeholder="Enter Comment"  cols="100"/>
                            <button>post</button>
                        </form>
                    </div>
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
        loadPost:(post)=>dispatch(loadPost(post))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostDetailView);

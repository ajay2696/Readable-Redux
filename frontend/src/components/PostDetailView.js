import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getComments,voteComment,editComment,deleteComment,addComment} from '../actions/Comments';
import {votePost,loadPost,deletePost,editPost} from '../actions/Posts';
import Comment from './Comment';
import Post from './Post';
import serializeForm from 'form-serialize';
import UUID from 'node-uuid';
import {Form,Input,Button,Card,CardBody} from 'reactstrap';

class PostDetailView extends Component{
    componentWillMount(){
        let postID=this.props.match.params.uid;
        this.props.loadPost(postID);
        this.props.getComments(postID);
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
        this.props.addComment(comment);
        e.target.reset();
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
                    <div>
                        <Card>
                            <CardBody>
                                <Form className="add-comment" method="POST" onSubmit={this.postComment} ref="commentform">
                                    <Input type="text" name="author" placeholder="Author" />{' '}
                                    <Input type="textarea" name="body" placeholder="Enter Comment"  cols="100"/>
                                    <Button>post</Button>
                                </Form>
                            </CardBody>
                        </Card>
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
        loadPost:(post)=>dispatch(loadPost(post)),
        editPost:(post)=>dispatch(editPost(post)),
        deletePost:(postID)=>dispatch(deletePost(postID))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostDetailView);

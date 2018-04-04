import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getComments,voteComment,editComment,deleteComment,addComment} from '../actions/PostDetails';
import * as PostCommentsAPI from '../util/PostCommentsAPI';

class PostDetailView extends Component{
    componentWillMount(){
        let postID=this.props.match.params.uid;
        PostCommentsAPI.fetchPostComments(postID)
            .then((comments)=>this.props.getComments(comments))
    }

    render(){
        return (
            <div>
                <h3>is Post Detail{this.props.match.params.uid}</h3>
            </div>);
    }
}

function mapStateToProps(state,ownProps){
    let postID =ownProps.match.params.uid;
    return {
        post:state.posts.find(function(obj){return obj.id===postID}),
        comments:state.comments
    }
}

function mapDispatchToProps(dispatch){
    return{
        getComments:(comments)=>dispatch(getComments(comments)),
        addComment:(comment)=>dispatch(addComment(comment)),
        voteComment:(commentID,option)=>dispatch(voteComment(commentID,option)),
        deleteComment:(commentID)=>dispatch(deleteComment(commentID)),
        editComment:(comment)=>dispatch(editComment(comment))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostDetailView);

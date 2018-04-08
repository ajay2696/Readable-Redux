import React,{Component} from 'react';

class Comment extends Component{
    render(){
        let comment=this.props.comment;
        return <div>
            <p>comment</p>
            <p>{this.props.comment.body} </p> <br/>
            votscore:{this.props.comment.voteScore}
            <button>edit</button>
            <button onClick={()=>this.props.deleteComment(comment.id,comment.parentId)}>delete</button>
            <button onClick={()=>this.props.voteComment(comment.id,'upVote')}>upVote</button>
            <button onClick={()=>this.props.voteComment(comment.id,'downVote')}>unVote</button>
            <hr/>
        </div>;
    }
}

export default Comment;

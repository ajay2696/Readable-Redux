import {GET_COMMENTS,VOTE_COMMENT,DELETE_COMMENT,ADD_COMMENT,EDIT_COMMENT} from '../actions/Comments';

export const comments= (comments=[],action)=>{
    switch(action.type){
    case GET_COMMENTS:
        return action.comments;
    case ADD_COMMENT:
        return comments.concat(action.comment);
    case VOTE_COMMENT:
        return comments.map((comment)=>{
            let voteScore=comment.voteScore;
            if(comment.id===action.commentID){
                if(action.option==='upVote'){
                    voteScore++;
                } else{
                    voteScore--;
                }
            }
            return Object.assign({},comment,{
                "voteScore":voteScore
            });
        });
    case EDIT_COMMENT:
        return comments.filter((comment)=>comment.id!==action.comment.id).concat(action.comment);
    case DELETE_COMMENT:
        return comments.map((comment)=>{
            let deleted=comment.deleted;
            if(comment.id===action.commentID){
                deleted=true;
            }
            return Object.assign({},comment,{deleted});
        })
    default:
        return comments;
    }
}

import * as CommentsAPI from '../util/CommentsAPI';
export const GET_COMMENTS='GET_COMMENTS';
export const VOTE_COMMENT='VOTE_COMMENT';
export const EDIT_COMMENT='EDIT_COMMENT';
export const DELETE_COMMENT='DELETE_COMMENT';
export const ADD_COMMENT='ADD_COMMENT';

const getCommentsAction=(comments)=>{
    return {
        type:GET_COMMENTS,
        comments
    }
}

const voteCommentAction=(commentID,option)=>{
    return {
        type:VOTE_COMMENT,
        commentID,
        option
    }
}
const editCommentAction=(comment)=>{
    return {
        type:EDIT_COMMENT,
        comment
    }
}

const deleteCommentAction=(commentID,postID)=>{
    return {
        type:DELETE_COMMENT,
        commentID,
        postID
    }
}
const addCommentAction=(comment)=>{
    return {
        type:ADD_COMMENT,
        comment
    }
}

export const getComments=(postID)=>dispatch=>{
    CommentsAPI.fetchPostComments(postID)
        .then((comments)=>dispatch(getCommentsAction(comments)));
}

export const voteComment=(commentID,option)=>dispatch=>{
    CommentsAPI.voteComment(commentID,option)
        .then(()=>dispatch(voteCommentAction(commentID,option)));
}

export const editComment=(comment)=>dispatch=>{
    CommentsAPI.editComment(comment)
        .then(()=>dispatch(editCommentAction(comment)));
}
export const deleteComment=(commentID,postID)=>dispatch=>{
    CommentsAPI.deleteComment(commentID,postID)
        .then(()=>dispatch(deleteCommentAction(commentID,postID)));
}
export const addComment=(comment)=>dispatch=>{
    CommentsAPI.postComment(comment)
        .then(()=>dispatch(addCommentAction(comment)));
}

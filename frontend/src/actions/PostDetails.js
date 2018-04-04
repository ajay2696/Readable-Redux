export const GET_COMMENTS='GET_COMMENTS';
export const VOTE_COMMENT='VOTE_COMMENT';
export const EDIT_COMMENT='EDIT_COMMENT';
export const DELETE_COMMENT='DELETE_COMMENT';
export const ADD_COMMENT='ADD_COMMENT';

export const getComments=(comments)=>{
    return {
        type:GET_COMMENTS,
        comments
    }
}

export const voteComment=(commentID,option)=>{
    return {
        type:VOTE_COMMENT,
        commentID,
        option
    }
}
export const editComment=(comment)=>{
    return {
        type:EDIT_COMMENT,
        comment
    }
}

export const deleteComment=(commentID)=>{
    return {
        type:DELETE_COMMENT,
        commentID
    }
}
export const addComment=(comment)=>{
    return {
        type:ADD_COMMENT,
        comment
    }
}

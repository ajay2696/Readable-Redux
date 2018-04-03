export const GET_COMMENTS='GET_COMMENTS';
export const VOTE_COMMENT='VOTE_COMMENTS';
export const EDIT_COMMENT='EDIT_COMMENT';
export const DELETE_COMMENT='DELETE_COMMENT';
export const ADD_COMMENT='ADD_COMMENT';

export const getComments=(comments)=>{
    return {
        type:GET_COMMENTS,
        comments
    }
}

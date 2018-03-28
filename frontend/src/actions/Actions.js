export const UP_VOTE='UP_VOTE';
export const UN_VOTE ='UN_VOTE';
export const FETCH_ALL_POSTS ='FETCH_ALL_POSTS';
export const upVote=(postID) =>{
    return {
        type:UP_VOTE,
        postID
    }
}
export const unVote=(postID) => {
    return {
        type:UN_VOTE,
        postID
    }
}
export const fetachALLPosts=() =>{
    return {
        type:FETCH_ALL_POSTS
    }
}

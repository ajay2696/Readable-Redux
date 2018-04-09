export const VOTE_POST='VOTE_POST';
export const FETCH_ALL_POSTS ='FETCH_ALL_POSTS';
export const ADD_POST='ADD_POST';
export const DELETE_POST='DELETE_POST';
export const LOAD_POST='LOAD_POST';
export const EDIT_POST='EDIT_POST';
export const votePost=(postID,option) =>{
    return {
        type:VOTE_POST,
        postID,
        option
    }
}
export const fetchALLPosts=(posts) =>{
    return {
        type:FETCH_ALL_POSTS,
        posts
    }
}

export const addPost=(post)=>{
    return {
        type:ADD_POST,
        post
    }
}

export const deletePost=(postID)=>{
    return {
        type:DELETE_POST,
        postID
    }
}

export const loadPost=(post)=>{
    return {
        type:LOAD_POST,
        post
    }
}
export const editPost=(post)=>{
    return {
        type:EDIT_POST,
        post
    }
}

import * as PostsAPI from '../util/PostsAPI';
export const VOTE_POST='VOTE_POST';
export const RECIEVED_ALL_POSTS ='FETCH_ALL_POSTS';
export const ADD_POST='ADD_POST';
export const DELETE_POST='DELETE_POST';
export const LOAD_POST='LOAD_POST';
export const EDIT_POST='EDIT_POST';
const votePostAction=(postID,option) =>{
    return {
        type:VOTE_POST,
        postID,
        option
    }
}
const fetchALLPostsAction=(posts) =>{
    return {
        type:RECIEVED_ALL_POSTS,
        posts
    }
}
const addPostAction=(post)=>{
    return {
        type:ADD_POST,
        post
    }
}
const deletePostAction=(postID)=>{
    return {
        type:DELETE_POST,
        postID
    }
}
const loadPostAction=(post)=>{
    return {
        type:LOAD_POST,
        post
    }
}
const editPostAction=(post)=>{
    return {
        type:EDIT_POST,
        post
    }
}
export const votePost=(postID,option)=>dispatch=>{
    PostsAPI.votePost(postID,option)
        .then(()=>dispatch(votePostAction(postID,option)));
}
export const fetchALLPosts=()=>dispatch=>{
    PostsAPI.getAllPosts()
        .then((posts)=>dispatch(fetchALLPostsAction(posts)));
}
export const addPost=(post)=>dispatch=>{
    PostsAPI.addPost(post)
        .then((post)=>dispatch(addPostAction(post)));
}

export const deletePost=(postID)=>dispatch=>{
    PostsAPI.deletePost(postID)
        .then((postID)=>dispatch(deletePostAction(postID)));
}
export const loadPost=(postID)=>dispatch=>{
    PostsAPI.loadPost(postID)
        .then((post)=>dispatch(loadPostAction(post)));
}
export const editPost=(post)=>dispatch=>{
    PostsAPI.editPost(post)
        .then((res)=>{
              console.log(res);
              console.log(JSON.stringify({'body':post.body,'title':post.title}));
          dispatch(editPostAction(post))});
}

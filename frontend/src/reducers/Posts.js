import {VOTE_POST,FETCH_ALL_POSTS,ADD_POST,DELETE_POST,LOAD_POST} from '../actions/Posts';
import {DELETE_COMMENT,ADD_COMMENT} from '../actions/Comments';

export const posts= (posts=[],action)=>{
    switch(action.type){
    case FETCH_ALL_POSTS:
        return  action.posts.slice(0);
    case LOAD_POST:
        return posts.filter((post)=>post.id!==action.post.id).concat(action.post);
    case VOTE_POST:
        return posts.map((post)=>{
            let voteScore =post.voteScore;
            if(post.id===action.postID){
                if(action.option==='upVote'){
                    voteScore++;
                } else if(action.option==='downVote'){
                    voteScore--;
                }
            }
            return Object.assign({},post,{
                "voteScore":voteScore
            });
        });

    case ADD_POST:
        return posts.concat(action.post);
    case DELETE_POST:
        return posts.map((post)=>{
            let deleted =post.deleted;
            if(post.id===action.postID){
                deleted=true;
            }
            return Object.assign({},post,{deleted});
        })

    case ADD_COMMENT:
        return posts.map((post)=>{
            let count =post.commentCount;
            if(post.id===action.comment.parentId){
                count++;
            }
            return Object.assign({},post,{
                "commentCount":count
            });
        });
    case DELETE_COMMENT:
        return posts.map((post)=>{
            let count =post.commentCount;
            if(post.id===action.postID){
                count--;
            }
            return Object.assign({},post,{
                "commentCount":count
            });
        });
    default:
        return posts;
    }
};

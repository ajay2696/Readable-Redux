import {UP_VOTE,UN_VOTE,FETCH_ALL_POSTS,ADD_POST} from '../actions/Actions';
import {combineReducers} from 'redux';
const initialState={
    posts:[
        {
            "id": "8xf0y6ziyjabvozdd253nd",
            "timestamp": 1467166872634,
            "title": "Udacity is the best place to learn React",
            "body": "Everyone says so after all.",
            "author": "thingtwo",
            "category": "react",
            "voteScore": 6,
            "deleted": false,
            "commentCount": 2
        },
        {
            "id": "6ni6ok3ym7mf1p33lnez",
            "timestamp": 1468479767190,
            "title": "Learn Redux in 10 minutes!",
            "body": "Just kidding. It takes more than 10 minutes to learn technology.",
            "author": "thingone",
            "category": "redux",
            "voteScore": -5,
            "deleted": false,
            "commentCount": 0
        }
    ]
};
const posts=(posts,action)=>{
    switch(action.type){
    case FETCH_ALL_POSTS:
        return {
            ...posts
        }
    case UP_VOTE:
        return posts.map((post)=>{
            let count =post.voteScore;
            if(post.id===action.postID){
                count++;
            }
            return Object.assign({},post,{
                "voteScore":count
            });
        })
    case UN_VOTE:
        return posts.map((post)=>{
            let count =post.voteScore;
            if(post.id===action.postID){
                count--;
            }
            return Object.assign({},post,{
                "voteScore":count
            });
        })
    case ADD_POST:
        return posts.concat(action.post);
    default:
        return initialState.posts;
    }
};

const comments=(comment,action)=>{
    
}

const AppReducer=combineReducers({posts});

export default AppReducer;

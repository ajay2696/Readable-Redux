import {combineReducers} from 'redux';
import {posts} from './Posts';
import {comments} from './Comments';
import {categories} from './Categories';
const AppReducer=combineReducers({posts,comments,categories});

export default AppReducer;

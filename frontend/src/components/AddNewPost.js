import React,{Component} from 'react';
import serializeForm from 'form-serialize';
import UUID from 'node-uuid';
import  * as ReadbleAPI from '../util/ReadableAPI';
import {connect} from 'react-redux';
import {addPost} from '../actions/Actions';

class AddNewPost extends Component{
    handleSubmit=(e)=>{
        e.preventDefault();
        const values=serializeForm(e.target,{hash:true});
        let postId=UUID.v4();
        let timestamp=Date.now();
        const post=Object.assign(values,
            {id:postId},
            {timestamp},
            {voteScore: 1,deleted: false,commentCount: 0
            });
        ReadbleAPI.addPost(post);
        this.props.addPost(post);
        this.props.history.push('/');
    }

    render(){
        return (
            <div>
                <form className="add-new-post" onSubmit={this.handleSubmit}>
                  Title<textarea name="title" rows="1" cols="100"> </textarea><br/>
                  Body<textarea name="body" rows="10" cols="100"> </textarea><br/>
                  Author<input type="text" name="author"></input><br/>
                  Category
                    <select name="category">
                        <option value="redux" selected>redux</option>
                        <option value="react">react</option>
                    </select> <br/>
                    <button>Submit</button>
                </form>
            </div>);
    }
}
function mapStateToProps(state){
    return {posts:state}
}
function mapDispatchToProps(dispatch){
    return {
        addPost:(post)=>dispatch(addPost(post))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddNewPost);

import React,{Component} from 'react';
import serializeForm from 'form-serialize';
import UUID from 'node-uuid';
import  * as PostsAPI from '../util/PostsAPI';
import {connect} from 'react-redux';
import {addPost} from '../actions/Posts';
import {Form,FormGroup,Input,Button,Label,Card,CardTitle,CardBody} from 'reactstrap';

class AddNewPost extends Component{
    state={
        title:'',
        body:'',
        author:'',
        category:'redux'
    }
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
        PostsAPI.addPost(post).then((post)=>{this.props.addPost(post)});
        this.props.history.push('/');
    }

    render(){
        return (
            <div>
                <Card>
                    <CardTitle> Add New Post</CardTitle>
                    <CardBody>
                        <Form onSubmit={this.handleSubmit} method="POST">
                            <FormGroup>
                                <Label for="newPostTitle">Title</Label>
                                <Input type="textarea" name="title" id="newPostTitle"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="newPostBody">Body</Label>
                                <Input type="textarea" name="title" id="newPostBody"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="newPostAuthor">Author</Label>
                                <Input type="text" name="title" id="newPostAuthor"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="newPostCategories">Categories</Label>
                                <Input type="select" name="category" id="newPostCategories">
                                    <option>react</option>
                                    <option>redux</option>
                                    <option>udacity</option>
                                </Input>
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        categories:state.categories
    }
}
function mapDispatchToProps(dispatch){
    return {
        addPost:(post)=>dispatch(addPost(post))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddNewPost);

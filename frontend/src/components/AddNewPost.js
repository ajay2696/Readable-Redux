import React,{Component} from 'react';
import serializeForm from 'form-serialize';
import UUID from 'node-uuid';
import {connect} from 'react-redux';
import {addPost} from '../actions/Posts';
import {Form,FormGroup,Input,Button,Label,Card,CardTitle,CardBody} from 'reactstrap';

class AddNewPost extends Component{
    state={
        title:'',
        body:'',
        author:'',
        category:''
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
        this.props.addPost(post);
        this.props.history.push('/');
    }

    handleChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        this.setState((prevState)=>({
            ...prevState,
            [name]:value
        }));
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
                                <Input type="textarea" name="title" id="newPostTitle"
                                    value={this.state.title||''} onChange={this.handleChange}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="newPostBody">Body</Label>
                                <Input type="textarea" name="body" id="newPostBody"
                                    value={this.state.body||''} onChange={this.handleChange}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="newPostAuthor">Author</Label>
                                <Input type="text" name="author" id="newPostAuthor"
                                    value={this.state.author||''} onChange={this.handleChange}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="newPostCategories">Categories</Label>
                                <Input type="select" name="category" id="newPostCategories"
                                    value={this.state.category||''} onChange={this.handleChange}>
                                    {
                                        this.props.categories.map((category)=>(
                                            <option key={category.name}>{category.name}</option>
                                        ))
                                    }
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

import React,{Component} from 'react';
import UUID from 'node-uuid';
import {connect} from 'react-redux';
import {addPost} from '../actions/Posts';
import {Form,FormGroup,Input,Button,Label,Card,CardTitle,CardBody} from 'reactstrap';
import PropTypes from 'prop-types';

class AddNewPost extends Component{
    state={
        title:'',
        body:'',
        author:'',
        category:'react'
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let errorColumns=Object.keys(this.state).filter((key)=>this.state[key]==='');
        if(errorColumns.length>0){
            this.setState((prevState)=>({
                ...prevState,
                error:'Please Enter Values for columns:'+errorColumns.toString()
            }));
        } else {
            const post={
                title:this.state.title,
                body:this.state.body,
                author:this.state.author,
                category:this.state.category,
                id:UUID.v4(),
                timestamp:Date.now(),
                voteScore: 1,
                deleted: false,
                commentCount: 0
            };
            this.props.addPost(post);
            this.props.history.push('/');
        }


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
                    {this.state.error&&(<div style={{color:"red"}}>{this.state.error}</div>)}
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
AddNewPost.propTypes={
    categories:PropTypes.array,
    addPost:PropTypes.func.isRequired,
    history:PropTypes.object
}
export default connect(mapStateToProps,mapDispatchToProps)(AddNewPost);

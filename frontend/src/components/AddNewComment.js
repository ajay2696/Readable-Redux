import React,{Component} from 'react';
import UUID from 'node-uuid';
import {Form,Input,Button,Card,CardBody} from 'reactstrap';

class AddNewComment extends Component{
  state={
      body:'',
      author:'',
  }
  handleChange=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      this.setState((prevState)=>({
          ...prevState,
          [name]:value
      }))
  }
  handleSubmit=(e)=>{
      e.preventDefault();
      let comment={
          author:this.state.author,
          body:this.state.body,
          id:UUID.v4(),
          parentId:this.props.post.id,
          timestamp:Date.now(),
          deleted:false,
          voteScore:0,
          parentDeleted:false
      };
      this.props.addComment(comment);
      e.target.reset();
      this.setState({
          body:'',
          author:''
      });
  }

  render(){
      return (
          <div>
              <Card>
                  <CardBody>
                      <Form onSubmit={this.handleSubmit}>
                          <Input type="text" value={this.state.author||''} name="author" placeholder="Author" onChange={this.handleChange}/>
                          <Input type="textarea" value={this.state.body||''} name="body" placeholder="Enter Comment" onChange={this.handleChange}/>
                          <Button>Post</Button>
                      </Form>
                  </CardBody>
              </Card>
          </div>);
  }

}

export default AddNewComment;

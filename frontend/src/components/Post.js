import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/newsitem.css';
import { Button, Modal,ModalBody,ModalHeader,ModalFooter,Form, FormGroup,
    Label, Input,Card,CardText,CardBody,CardTitle,CardSubtitle } from 'reactstrap';

class Post extends Component{
  state={
  }
  componentWillMount(){
      let post=this.props.post;
      this.setState({
          isEditModalOpen:false,
          isDeleteModalOpen:false,
          post
      });
  }
  openEditModal=()=>{
      let post=this.props.post;
      this.setState((prevState)=>
          Object.assign(prevState,{post},{isEditModalOpen:true}));
  }
  openDeleteModal=()=>{
      this.setState((prevState)=>
          Object.assign(prevState,{isDeleteModalOpen:true}));
  }
  closeEditModal=()=>{
      this.setState((prevState) =>
          Object.assign(prevState,{isEditModalOpen:false}));
  }
  handleSubmit=(e)=>{
      e.preventDefault();
      let timestamp=Date.now();
      let post={...this.state.post,
          timestamp
      };
      console.log(post);
      this.props.editPost(post);

      this.setState((prevState) =>
          Object.assign(prevState,{isEditModalOpen:false}));
  }

  handleChange=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      this.setState((prevState)=>{
          return {
              ...prevState,
              post:{
                  ...prevState.post,
                  [name]:value
              }
          }
      });
  }

  deletePost=()=>{
      const postId=this.state.post.id;
      this.props.deletePost(postId);
      this.setState((prevState)=>
          Object.assign(prevState,{isDeleteModalOpen:false})
      );
  }
  closeDeleteModal=()=>{
      this.setState((prevState)=>
          Object.assign(prevState,{isDeleteModalOpen:false})
      );
  }
  render(){
      const post=this.props.post;
      const timestamp=new Date(post.timestamp).toLocaleTimeString();
      return (
          <div>
              <Card width="80%">
                  <CardBody>
                      <CardTitle> <Link to={`/post/${post.id}`}>{post.title}</Link></CardTitle>
                      <CardSubtitle>
                          <small className="text-muted">
                          Posted On:{timestamp}|Author:{post.author}|
                          comments:{post.commentCount}|Votes:{post.voteScore}
                          </small>
                      </CardSubtitle>
                      <CardText> </CardText>
                      <Button onClick={()=>this.props.votePost(post.id,'upVote')}>upvote</Button>{' '}
                      <Button onClick={()=>this.props.votePost(post.id,'downVote')}>unvote</Button>{' '}
                      <Button onClick={this.openEditModal}>edit</Button>{' '}
                      <Button onClick={this.openDeleteModal}>delete</Button>
                  </CardBody>
              </Card>
              <Modal isOpen={this.state.isEditModalOpen}  >
                  <ModalHeader toggle={this.closeEditModal}>Edit Post</ModalHeader>
                  <ModalBody>
                      <Form name="editPostform" method="POST" onSubmit={this.handleSubmit}>
                          <FormGroup>
                              <Label for="editTitle">Title</Label>
                              <Input type="text" name="title" id="editTitle" value={this.state.post.title||''}
                                  onChange={this.handleChange}/>
                          </FormGroup>
                          <FormGroup>
                              <Label for="editBody">Body </Label>
                              <Input type="textarea" name="body" id="editBody" value={this.state.post.body||''}
                                  onChange={this.handleChange}/>
                          </FormGroup>
                          <Button color="primary">Submit</Button>
                      </Form>
                  </ModalBody>
              </Modal>

              <Modal isOpen={this.state.isDeleteModalOpen}>
                  <ModalHeader>Are you Sure!! Do you want delete Post?</ModalHeader>
                  <ModalFooter>
                      <Button color="primary" onClick={this.deletePost}>Delete</Button>{' '}
                      <Button color="primary" onClick={this.closeDeleteModal}>Cancel</Button>{}
                  </ModalFooter>
              </Modal>

          </div>
      );
  }
}

export default Post;

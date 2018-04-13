import React,{Component} from 'react';
import UUID from 'node-uuid';
import {Form,Input,Button,Card,CardBody} from 'reactstrap';
import PropTypes from 'prop-types';

class AddNewComment extends Component{
  state={
      body:'',
      author:'',
      error:''
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
      let errorColumns=Object.keys(this.state).filter((key)=>this.state[key]===''&& key!=='error');
      if(errorColumns.length>0){
          this.setState((prevState)=>({
              ...prevState,
              error:'Please Enter Values for columns:'+errorColumns.toString()
          }));
      } else{
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
              author:'',
              error:''
          });
      }
  }

  render(){
      return (
          <div>
              <Card>
                  {this.state.error!==''&&(<div style={{color:"red"}}>{this.state.error}</div>)}
                  <CardBody>
                      <Form onSubmit={this.handleSubmit}>
                          <Input type="text" value={this.state.author||''} name="author" placeholder="Author" onChange={this.handleChange}/>
                          <Input type="textarea" value={this.state.body||''} name="body" placeholder="Body" onChange={this.handleChange}/>
                          <Button>Post</Button>
                      </Form>
                  </CardBody>
              </Card>
          </div>);
  }

}

AddNewComment.propTypes={
    post:PropTypes.object,
    addComment:PropTypes.func.isRequired
}
export default AddNewComment;

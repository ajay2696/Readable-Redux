import React,{Component} from 'react';
import {Modal,ModalHeader,ModalBody,Button,Form,FormGroup,Input,Label,ModalFooter} from 'reactstrap';
import PropTypes from 'prop-types';
class Comment extends Component{
    state={
        isEditModalOpen:false,
        isDeleteModalOpen:false,
        comment:{}
    }
    componentWillMount(){
        let comment=this.props.comment;
        this.setState((prevState)=>({
            ...prevState,
            comment
        }));
    }
    closeEditModal=()=>{
        this.setState((prevState)=>({
            ...prevState,
            isEditModalOpen:false
        }));
    }
    openEditModal=()=>{
        this.setState((prevState)=>({
            ...prevState,
            isEditModalOpen:true
        }));
    }
    handleChange=(e)=>{
        let body=e.target.value;
        this.setState((prevState)=>({
            ...prevState,
            comment:{
                ...prevState.comment,
                body
            }
        }));
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let timestamp=Date.now();
        let newComment={
            ...this.state.comment,
            timestamp
        }
        this.props.editComment(newComment);
        this.setState((prevState)=>({
            ...prevState,
            isEditModalOpen:false
        }))
    }
    openDeleteModal=()=>{
        this.setState((prevState)=>({
            ...prevState,
            isDeleteModalOpen:true
        }));
    }
    closeDeleteModal=()=>{
        this.setState((prevState)=>({
            ...prevState,
            isDeleteModalOpen:false
        }))
    }
    deleteComment=()=>{
        this.props.deleteComment(this.state.comment.id,this.state.comment.parentId);
    }
    render(){
        let comment=this.props.comment;
        return <div>
            <div>{comment.body}{' '}
                <button onClick={this.openEditModal} className="edit-comment"></button>{' '}
                <button onClick={this.openDeleteModal} className="delete-comment"></button>{' '}
            </div>
            <button onClick={()=>this.props.voteComment(comment.id,'upVote')} className="upvote-comment"></button>
            {' '}{comment.voteScore}{' '}
            <button onClick={()=>this.props.voteComment(comment.id,'downVote')} className="downvote-comment"></button>
            <hr/>
            <Modal isOpen={this.state.isEditModalOpen}>
                <ModalHeader toggle={this.closeEditModal}>Edit Comment</ModalHeader>
                <ModalBody>
                    <Form method="POST" onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="editComment"></Label>
                            <Input type="textarea" name="body" id="editComment"
                                onChange={this.handleChange}
                                value={this.state.comment.body||''}>
                            </Input>
                        </FormGroup>
                        <Button color="primary">Submit</Button>
                    </Form>
                </ModalBody>
            </Modal>
            <Modal isOpen={this.state.isDeleteModalOpen}>
                <ModalHeader>Are you Sure!! Do you want delete Comment?</ModalHeader>
                <ModalFooter>
                    <Button color="primary" onClick={this.deleteComment}>Delete</Button>{' '}
                    <Button color="primary" onClick={this.closeDeleteModal}>Cancel</Button>{}
                </ModalFooter>
            </Modal>

        </div>;
    }
}
Comment.propTypes={
    comment:PropTypes.object,
    voteComment:PropTypes.func.isRequired,
    editComment:PropTypes.func.isRequired,
    deleteComment:PropTypes.func.isRequired
}

export default Comment;

import React,{Component} from 'react';
class PostDetailView extends Component{
render(){
        return (
            <div>
                <h3>is Post Detail{this.props.match.params.uid}</h3>
            </div>);
    }
}
export default PostDetailView;

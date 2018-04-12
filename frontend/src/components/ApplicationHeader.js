import React,{Component} from 'react';
import '../css/header.css';
import {Link} from 'react-router-dom';
import {fetchCategories} from '../actions/Categories';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
class ApplicationHeader extends Component{
  state={
      categories:[]
  }
  componentDidMount=()=>{
      this.props.fetchCategories();
  }
  render(){
      return (
          <div>
              <header className="application-title">
                  <h1>Training Discussion Forum</h1>
                  <nav>
                      <ul>
                          <li><Link to="/">Home</Link></li>
                          {this.props.categories&&this.props.categories.map((category)=>(
                              <li key={category.name}><Link to={`/categories/${category.name}`}>{category.name}</Link></li>
                          ))}
                          <li><Link to="/addpost" >New Post</Link></li>
                      </ul>
                  </nav>
              </header>
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
        fetchCategories:()=>dispatch(fetchCategories())
    }
}
ApplicationHeader.propTypes={
    categories:PropTypes.array,
    fetchCategories:PropTypes.func.isRequired
}
export default connect(mapStateToProps,mapDispatchToProps)(ApplicationHeader);

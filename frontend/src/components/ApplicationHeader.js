import React,{Component} from 'react';
import '../css/header.css';
import * as CategoriesAPI from '../util/CategoriesAPI';
import {Link} from 'react-router-dom';
import {fetchCategories} from '../actions/Categories';
import {connect} from 'react-redux';

class ApplicationHeader extends Component{
  state={
      categories:[]
  }
  componentDidMount=()=>{
      CategoriesAPI.getCategories()
          .then((categories)=>{
              this.props.fetchCategories(categories)});
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
        fetchCategories:(categories)=>dispatch(fetchCategories(categories))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ApplicationHeader);

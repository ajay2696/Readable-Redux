import React,{Component} from 'react';
import '../css/header.css';
import * as ReadableAPI from '../util/ReadableAPI';
import {Link} from 'react-router-dom';
class ApplicationHeader extends Component{
  state={
      categories:[]
  }
  componentDidMount=()=>{
      ReadableAPI.getCategories()
          .then((categories)=>{
              this.setState({categories})});
  }
  render(){
      return (
          <div>
              <header className="application-title">
                  <h1>Training Discussion Forum</h1>
                  <nav>
                      <ul>
                          <li><Link to="/">Home</Link></li>
                          {this.state.categories&&this.state.categories.map((category)=>(
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

export default ApplicationHeader;

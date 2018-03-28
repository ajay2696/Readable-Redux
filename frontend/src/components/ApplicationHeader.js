import React,{Component} from 'react';
import '../css/header.css';
import * as ReadableAPI from '../util/ReadableAPI';
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
                          <li><a>Home</a></li>
                          {this.state.categories&&this.state.categories.map((category)=>(
                              <li key={category.name}><a>{category.name}</a></li>
                          ))}
                          <li><a>New Post</a></li>
                      </ul>
                  </nav>
              </header>
          </div>
      );
  }
}

export default ApplicationHeader;

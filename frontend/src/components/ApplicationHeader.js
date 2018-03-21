import React,{Component} from 'react';
import '../css/header.css';
class ApplicationHeader extends Component{
  render(){
    return (
      <div>
        <header className="application-title">
          <h1>Training Discussion Forum</h1>
          <nav>
              <ul>
                <li><a>Home</a></li>
                <li><a>Udacity</a></li>
                <li><a>React</a></li>
                <li><a>Redux</a></li>
                <li><a>New Post</a></li>
              </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default ApplicationHeader;

import React,{Component} from 'react';
import '../css/newsitem.css';
class NewsItem extends Component {
  render(){
    return (
      <div>
          <div class="card">
          <p class="title">CEO & Founder, Example</p>
          <p>Harvard University</p>
          <div>
            <a href="#"><i class="fa fa-dribbble"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-facebook"></i></a>
          </div>
          </div>
      </div>
    );
  }
}
export default NewsItem;

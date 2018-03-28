import React,{Component} from 'react';
import '../css/newsitem.css';
class NewsItem extends Component {
  state={
      date:new Date(1467166872634)
  }
  render(){
      return (
          <div>
              <table>
                  <tr className="title">
            Udacity is the best place to learn React
                  </tr>
                  <tr>
                      <td className="subtext">
              Posted On:|{this.state.date.toString()} |
                      </td>
                      <td className="subtext">
              Author:Ajay |
                      </td>
                      <td className="subtext">
                          <a href="comments">comments</a>
                      </td>
                      <td className="subtext">
                          <a href="votes">votes</a>
                      </td>
                      <td className="subtext">
                          <a href="upvote">upvote</a>
                      </td>
                      <td className="subtext">
                          <a href="unvote">unvote</a>
                      </td>
                  </tr>
              </table>
              <hr/>
          </div>
      );
  }
}
export default NewsItem;

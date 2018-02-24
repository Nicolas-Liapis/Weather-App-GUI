import './style';
import { Component, render } from 'preact';

export default class Boxy extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if(document.getElementsByClassName('box')[0].className != "box transform") {
      document.getElementsByClassName('box')[0].className = "box transform";
    } else if (document.getElementsByClassName('box')[0].margin = "box transform") {
      document.getElementsByClassName('box')[0].className = "box transform transform-active";
    }

  }
  render() {
    return (
      <div class="box trasnform" onClick={this.handleClick}></div>


    );
  }
}

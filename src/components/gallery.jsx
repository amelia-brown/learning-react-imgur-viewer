import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './gallery-styles';

@CSSModules(styles)

export default class Gallery extends Component {
  state = {
    data: [],
    modal: "",
  };

  componentWillMount() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://api.imgur.com/3/gallery/hot/viral/0.json');
    xhttp.setRequestHeader('Authorization', 'Client-ID 5e15c36c60713b8');

    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status === 200) {
        this.setState({data: JSON.parse(xhttp['responseText']).data});
      }
    }.bind(this);
    xhttp.send();
  }

  render () {
    var elements = this.state.data.map((item, index) => {
      return (
        <div
          onClick={::this.handleClick}
          data-link={item.link}
          styleName={item.is_album === true ? "blank" : "imgrContainer"}
          key={item.id}>
         <img
          src={item.link}
          styleName="imgrImg" />
       </div>
      );
    })
    return (
      <div className={styles.classbase}
       styleName="galleryContainer">
        {elements}
        <div
          styleName={this.state.modal === "" ? "modalHidden" : "modalShowing"}
          onClick={::this.handleClickOff}>
          <img src={this.state.modal} styleName="modal" />
        </div>
      </div>
    );
  }
  handleClick(e) {
    return this.setState({modal: e.target.dataset.link});
  }
  handleClickOff(e) {
    return this.setState({modal: ""});
  }
}

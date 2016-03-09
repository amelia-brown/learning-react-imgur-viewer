import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './gallery-styles';

@CSSModules(styles)

export default class Gallery extends Component {
  state = {
    data: [],
    modal: "",
    page: 0,
    max: 5,
  };

  componentWillMount() {
    return this.fetchData(this.state.page);
  }
  filterAlbum(item) {
    return !item.is_album;
  }
//filterRepeat(item) {
//  return !item.id === this.state.data.map(item.id);
//}
  fetchData(pageNumber) {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://api.imgur.com/3/gallery/hot/viral/' + pageNumber + '.json');
    xhttp.setRequestHeader('Authorization', 'Client-ID 5e15c36c60713b8');

    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status === 200) {
        var newData = JSON.parse(xhttp.responseText).data;
        this.setState({data: this.state.data.concat(newData)});
      }
    }.bind(this);
    xhttp.send();
    return this.state.data;
  }
  render () {
    var elements = this.state.data.filter(this.filterAlbum).slice(0, this.state.max).map((item, index) => {
     return (
        <div
          onClick={::this.handleClick}
          data-link={item.link}
          styleName="imgrContainer">
         <img
          src={item.link}
          styleName="imgrImg" />
       </div>
      );
    })
    return (
      <div className="main">
        <div className={styles.classbase}
          styleName="galleryContainer">
            {elements}
          <div
            styleName={this.state.modal === "" ? "modalHidden" : "modalShowing"}
            onClick={::this.handleClickOff}>
            <img src={this.state.modal} styleName="modal" />
          </div>
        </div>
        <button styleName="showMore" onClick={::this.showMore}>Show more</button>
      </div>
    );
  }
  handleClick(e) {
    return this.setState({modal: e.target.dataset.link});
  }
  handleClickOff(e) {
    return this.setState({modal: ""});
  }
  showMore(e) {
    this.setState({max: this.state.max+5});
    if (this.state.max >= this.state.data.length) {
      this.setState({page: this.state.page+1});
      return this.fetchData(this.state.page);
    }
    return this.state.max;
  }
  /*isEnough(e){
    if (this.state.max >= this.state.data.length) {
      this.setState({min: this.state.data.length});
      this.setState({page: this.state.page+1});
      return this.fetchData(this.state.page);
    }
  }*/
}

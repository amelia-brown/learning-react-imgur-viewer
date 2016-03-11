import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './gallery-styles';

@CSSModules(styles)

export default class Gallery extends Component {
  state = {
    data: [],
    modal: "",
    page: 0,
    max: 20,
    modalIndex: 0,
  };

  componentWillMount() {
    return this.fetchData(this.state.page);
  }
  filterAlbum(item) {
    return !item.is_album;
  }
  fetchData(pageNumber) {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://api.imgur.com/3/gallery/hot/viral/' + pageNumber + '.json');
    xhttp.setRequestHeader('Authorization', 'Client-ID 5e15c36c60713b8');

    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status === 200) {
        var newData = JSON.parse(xhttp.responseText).data.filter(this.filterAlbum);
        this.setState({data: this.state.data.concat(newData)});
      }
    }.bind(this);
    xhttp.send();
    return this.state.data;
  }
  handleClick(e) {
    return this.setState({modal: e.target.dataset.link, modalIndex: e.target.dataset.index});
  }
  handleClickOff(e) {
    return this.setState({modal: ""});
  }
  showMore(e) {
    this.setState({max: this.state.max+4}, () => {
      if (this.state.data.length <= this.state.max) {
        this.setState({page: this.state.page+1}, () => {
         console.log("fetch Called", this.state);
         return this.fetchData(this.state.page);

        });
      }
    });
       return this.state.max;
  }
  previous(e) {
    this.setState({modalIndex: parseInt(this.state.modalIndex,10)-1}, () => {
      return this.setState({modal: this.state.data[this.state.modalIndex].link});
    });
  }
  next() {
    this.setState({modalIndex: parseInt(this.state.modalIndex,10)+1}, () => {
      if (this.state.modalIndex === this.state.data.length-1) {
        this.fetchData(this.state.page+1);
        //console.log("no link");
      }
      return this.setState({modal: this.state.data[this.state.modalIndex].link});
    });
  }


  render () {
    var elements = this.state.data.slice(0, this.state.max).map((item, index) => {
     return (
        <div
          onClick={::this.handleClick}
          data-link={item.link}
          styleName="imgrContainer"
          data-index={index}
          key={item.id}>

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
            <div styleName="modalInnerContainer">
              <img src={this.state.modal} styleName="modal" />
            </div>
            <div styleName="flexContainer">
              <button onClick={::this.previous} styleName="prevNext">Previous</button>
              <button onClick={::this.next} styleName="prevNext">Next</button>
            </div>
          </div>
        </div>
        <button styleName="showMore" onClick={::this.showMore}>Show more</button>
      </div>
    );
  }
 }

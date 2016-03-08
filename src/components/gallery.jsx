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
    return this.componentUpdate(0);
  }

  function componentUpdate(pageNumber){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://api.imgur.com/3/gallery/hot/viral/' + {pageNumber} + '.json');
    xhttp.setRequestHeader('Authorization', 'Client-ID 5e15c36c60713b8');

    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status === 200) {
        this.setState({data: JSON.parse(xhttp['responseText']).data});
      }
    }.bind(this);
    xhttp.send();
  }
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
    return this.componentUpdate(1);
  }
}



/*
ummm
possibly
but it may be easier just to keep track of the page
so one thing you could do is move the xhttp request to its own function
pass it a page number
and let it handle updating the state when you call it

so like onClick => increment page number => fetchData(pageNumber) => it updates the state => view updates automatically
on your initial one
you can have state.page = 1
and just call in the componentWillMount() { this.fetch(this.state.page) }
sorta thing

so in your fetch when you get the results back
take the value of the current this.state.data and join it with the new results
then use that to set the state of data to the joined array
right?
 *
 *
 *
 * */

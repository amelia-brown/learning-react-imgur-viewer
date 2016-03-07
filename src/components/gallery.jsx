import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './gallery-styles';

@CSSModules(styles)

export default class Gallery extends Component {
  state = {data: []};
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
    var elements = this.state.data.map(function(item, index) {
      return <div styleName={item.is_album === true ? "blank" : "imgrContainer"} key={item.id}><img src={item.link} styleName="imgrImg" /></div>;
    })
    return (
      <div className={styles.classbase}
       styleName="galleryContainer">
        {elements}
      </div>
    )
  }
}

/*
xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    document.getElementById("demo").innerHTML = xhttp.responseText;
  }
};
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();
 * */

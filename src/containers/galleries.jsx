import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { read } from '../modules/galleries';
import CSSModules from 'react-css-modules';
import styles from '../components/gallery-styles';
import modal from './modal';

@connect( (state) => {
  return {
    galleries: state.galleries,
  }
}, (dispatch) => {
  return bindActionCreators({ read }, dispatch)
})

@CSSModules(styles)

export default class Gallery extends React.Component {
  componentWillMount() {
    return this.props.read();
   }
   filterAlbum(item) {
       return !item.is_album;
   };
   render() {
     const elements = this.props.galleries.data.filter(this.filterAlbum).map((image) => {
      return (
        <div
          data-link={image.link}
          data-index={image.index}
          styleName="imgrContainer"
          key={image.id}>

          <img
            src={image.link}
            styleName="imgrImg">
          </img>
        </div>
      );
     });
     return (
       <div
         onClick=render(<Modal />)
         className="main">
         <div styleName="galleryContainer">
           {elements}
         </div>
       </div>
     );
   }
};

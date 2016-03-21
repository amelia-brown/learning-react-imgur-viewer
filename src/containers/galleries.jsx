import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleModal, modal } from '../modules/modal';
import { read } from '../modules/galleries';
import CSSModules from 'react-css-modules';
import styles from '../components/gallery-styles';
import Modal from './modal';

@connect( (state) => {
  return {
    galleries: state.galleries,
  }
}, (dispatch) => {
  return bindActionCreators({ read, modal, toggleModal }, dispatch)
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
     const elements = this.props.galleries.data.filter(this.filterAlbum).map((image, index) => {
      return (
        <div
          onClick={(e) => {
             this.props.toggleModal();
             return this.props.modal(image.link, index);
          }}
          data-link={image.link}
          data-index={index}
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
         className="main">
         <div styleName="galleryContainer">
           {elements}
         </div>
       <Modal />
       </div>
     );
   }
};

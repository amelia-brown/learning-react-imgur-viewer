import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleModal, openModal } from '../modules/modal';
import { read, loadMore, showMore } from '../modules/galleries';
import CSSModules from 'react-css-modules';
import styles from '../components/gallery-styles';
import Modal from './modal';

@connect( (state) => {
  return {
    galleries: state.galleries,
  }
}, (dispatch) => {
  return bindActionCreators({ read, openModal, toggleModal, loadMore, showMore }, dispatch)
})

@CSSModules(styles)

export default class Gallery extends React.Component {
  componentWillMount() {
    return this.props.read();
   }
   filterAlbum(item) {
       return !item.is_album;
   };

  let

  render() {
    const elements = this.props.galleries.data
    .filter(this.filterAlbum)
    .slice(0, this.props.galleries.showCount)
    .map((image, index) => {
      return (
        <div
          key={image.id}
          onClick={() => {
            this.props.toggleModal();
            return this.props.openModal(index);
          }}
          styleName="imgrContainer">
          <img
            src={image.link}
            styleName="imgrImg">
          </img>
        </div>
      );
     });
     let page = 1;
     return (
       <div
         className="main">
         <div styleName="galleryContainer">
           {elements}
         </div>
         <button styleName="showMore"
          onClick={this.props.showMore}
         >Show more</button>
       <Modal />
       </div>
     );
   }
};

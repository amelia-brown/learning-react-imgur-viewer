import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleModal, previous, next, openModal } from '../modules/modal';
import CSSModules from 'react-css-modules';
import styles from '../components/gallery-styles';

@connect( (state) => {
  return {
    galleries: state.galleries,
    modal: state.modal,
  }
}, (dispatch) => {
  return bindActionCreators({ toggleModal, previous, next, openModal }, dispatch)
})

@CSSModules(styles)

export default class Modal extends React.Component {
  filterAlbum(item) {
       return !item.is_album;
   };
  render() {
    return (
      <div
        styleName={this.props.modal.showing? "modalShowing" : "modalHidden"}
        >
        <div
          styleName="landing"
          onClick={ (e) => {
            return this.props.toggleModal()}
          }
        ></div>
        <div styleName="modalInnerContainer">
          <img src={this.props.modal.showing? this.props.galleries.data
            .filter(this.filterAlbum)
            [this.props.modal.index].link : undefined}
            styleName="modal" />
        </div>
                <div styleName="flexContainer">
          <button
            onClick={() => {
              return this.props.previous(this.props.modal.index-1);
            }}
            styleName="prevNext">
            Previous
          </button>
          <button
            onClick={() => {
              return this.props.next(this.props.modal.index+1);
            }}
            styleName="prevNext">
            Next
          </button>
        </div>
      </div>
    )
  }
}

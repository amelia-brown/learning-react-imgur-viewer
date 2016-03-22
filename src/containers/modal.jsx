import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleModal, previous, next } from '../modules/modal';
import CSSModules from 'react-css-modules';
import styles from '../components/gallery-styles';

@connect( (state) => {
  return {
    modal: state.modal,
  }
}, (dispatch) => {
  return bindActionCreators({ toggleModal, previous, next }, dispatch)
})

@CSSModules(styles)

export default class Modal extends React.Component {
  render() {
    return (
      <div
        onClick={(e) => {
          return this.props.toggleModal();
        }}
        styleName={this.props.modal.showing? "modalShowing" : "modalHidden"}
        >
        <div styleName="modalInnerContainer">
          <img src={this.props.modal.link} styleName="modal" />
        </div>
        <div styleName="flexContainer">
          <button
            onClick={(e) => {
              console.log(e.target.props);
            }}
            styleName="prevNext">
            Previous
          </button>
          <button
            styleName="prevNext">
            Next
          </button>
        </div>
      </div>
    )
  }
}

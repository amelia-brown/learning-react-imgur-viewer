// OKAY
// So the modal is contained in a <div> element in the DOM
// It renders the image that was the target of the click event
// It should be an object in the state tree which MUST include
// the keys: showing :(boolean), index : (index in the
// gallery array), link : link to the current image.
//
//

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleModal } from '../modules/modal';
import CSSModules from 'react-css-modules';
import styles from '../components/gallery-styles';

@connect( (state) => {
  return {
    modal: state.modal,
  }
}, (dispatch) => {
  return bindActionCreators({ toggleModal }, dispatch)
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
          <button styleName="prevNext">Previous</button>
          <button styleName="prevNext">Next</button>
        </div>
      </div>
    )
  }
}

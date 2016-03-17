import React from 'react';

const Modal = ({onClick, showing, image}) => (
  <div
    styleName={showing ? "modalShowing" : "modalHidden" }
    onClick={onClick}>
    <div
      styleName="modalInnerContainer">
        <img src={image} />
    </div>
    <div styleName="flexContainer">
      <button styleName="prevNext">Previous</button>
      <button styleName="prevNext">Next</button>
    </div>
  </div>
)

export default Modal;

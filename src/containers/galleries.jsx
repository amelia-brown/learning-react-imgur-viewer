import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { read } from '../modules/galleries';

  @connect( (state) => {
    return {
      galleries: state.galleries,
    }
  }, (dispatch) => {
    return bindActionCreators({ read }, dispatch)
  })

export default class Gallery extends React.Component {
  componentWillMount() {
    return (
        <div>
          {this.props.galleries}
        </div>
     )
   }
};

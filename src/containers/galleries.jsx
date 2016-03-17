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
    return this.props.read();
   }
   render() {
     filterAlbum(item) {
       return !item.is_album;
     };
     const elements = this.props.galleries.data.filter(this.filterAlbum).map.((image) => {
      return <div key={image.id} album={image.is_album}><img src={image.link}></img></div>
     });
     return (
       <div>
         Hello World
         {elements}
       </div>
     );
   }
};

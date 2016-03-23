const get = (url) => {
  return new Promise((resolve, reject) => {
    const headers = new Headers();
    headers.append("Authorization", "Client-ID 5e15c36c60713b8");
      fetch(url, {headers}).then(response => {
        !response.ok && reject(response.error);
        response.json().then(json => resolve(json));
      }).catch(error => {
        reject(error);
      });
   });
 }

const READ = 'galleries/READ';
const LOAD_MORE = 'galleries/LOAD_MORE';
const SHOW_MORE = 'galleries/SHOW_MORE';


const INITIAL_STATE = {
  pending: false,
  data: [],
  showCount: 8,
};


export const loadMore = (pageNumber) => {
  var promise = get('https://api.imgur.com/3/gallery/hot/viral/' + pageNumber )
  return {
    type: LOAD_MORE,
    payload: {
      promise,
    },
  }
}

export const read = (pageNumber) => {
  var promise = get('https://api.imgur.com/3/gallery/hot/viral/');
  return {
    type: READ,
    payload: {
      promise,
    },
  }
}

export const showMore = () => {
  return {
    type: SHOW_MORE,
  }
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case `${READ}_PENDING`:
      return state;

    case `${READ}_REJECTED`:
      break;

    case `${READ}_FULFILLED`:
      return Object.assign({}, state, { data: action.payload.data, pending: false });

    case `${LOAD_MORE}_FULFILLED`:
      return Object.assign({}, state, { data: state.data.concat(action.payload.data) });

    case SHOW_MORE:
      return Object.assign({}, state, {showCount: state.showCount+4});

    default:
      return state
  }
}

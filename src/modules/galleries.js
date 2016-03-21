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

const INITIAL_STATE = {
  pending: false,
  data: [],
};

export const read = (pageNumber) => {
  var promise = get('https://api.imgur.com/3/gallery/hot/viral/');
  return {
    type: READ,
    payload: {
      promise,
    },
  }
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case `${READ}_PENDING`:
      return state;

    case `${READ}_REJECTED`:
      break;

    case `${READ}_FULFILLED`:
      return Object.assign({}, { data: action.payload.data, pending: false });

    default:
      return state
  }
}

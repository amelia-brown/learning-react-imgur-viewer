const get = (url) => {
  return new Promise((resolve, reject) => {
      fetch(url).then(response => {
        !response.ok && reject(response.error);
        response.json.then(json => resolve(json));
      }).catch(error => {
        reject(error);
      });
   });
 }

const READ = 'galleries/READ';

const INITIAL_STATE= {
  pending: false,
  data: [],
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

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case `${READ}_PENDING`:

    case `${READ}_REJECTED`:

    case `${READ}_FUFILLED`:

    default:
      return state
  }
}

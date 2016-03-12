require('isomorphic-fetch');
import 

const get = (url) => {
  return new Promise(resolve, reject) {
    fetch(url)
    .then(response => {
      !response.ok && reject(response.error);
      response.json().then(json => resolve(json));
    })
  }
};

const READ = 'images/READ';

export const read = (pageNumber) => {
  const promise = get('https://api.imgur.com/3/gallery/hot/viral/' + pageNumber);
  return {
    type: READ,
    payload: {
      promise: promise,
    };
  };
};

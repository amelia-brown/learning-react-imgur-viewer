const get = () => {
  //http request with fetch
  //return JSON data from API
  //
  //Return error if request fails
  //
  //Returns PROMISE

  return new Promise((resolve, reject) => {
    return resolve();

    //fetch request
    //
   });
}

const READ = 'galleries/READ';

const INITIAL_STATE= {
  pending: false,
  data: [],
}

export const read = () => {
  var promise = get();
  return {
    type: READ,
    payload: {
      promise,
    },
  }
}

export default = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case `${READ}_PENDING`:

    case `${READ}_REJECTED`:

    case `${READ}_FUFILLED`:

    default:
      return state
  }
}

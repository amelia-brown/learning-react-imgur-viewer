const OPEN_MODAL = 'modal/OPEN_MODAL';
const TOGGLE_MODAL = 'modal/TOGGLE_MODAL';
const PREVIOUS = 'modal/PREVIOUS';
const NEXT = 'modal/NEXT';

export const openModal = (index) => {
  return {
    type: OPEN_MODAL,
    payload: {
      index,
    },
  }
}

export const toggleModal = (showing) => {
  return {
    type: TOGGLE_MODAL,
  }
}

export const previous = (index) => {
  return {
    type: PREVIOUS,
    payload: {
      index,
    }
  }
}


export const next = (index) => {
  return {
    type: NEXT,
    payload: {
      index,
    }

  }
}

var INITIAL_STATE = {
  index: undefined,
  showing: false,
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, { index: action.payload.index });

    case TOGGLE_MODAL:
      return Object.assign({}, state, { showing: !state.showing });

    case PREVIOUS:
      return Object.assign({}, state, { index: action.payload.index-- });

    case NEXT:
      return Object.assign({}, state, { index: action.payload.index++ });

    default:
      return state;
  }
}

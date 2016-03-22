//modal action

const OPEN_MODAL = 'OPEN_MODAL';
const TOGGLE_MODAL = 'TOGGLE_MODAL';
const PREVIOUS = 'PREVIOUS';
const NEXT = 'NEXT';

export const modal = (link, id) => {
  return {
    type: OPEN_MODAL,
    payload: {
      id,
      link,
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
      link,
    }
  }
}

export const next = (index) => {
  return {
    type: NEXT,
    payload: {
      index,
      link,
    }

  }
}

var INITIAL_STATE = {
  id: undefined,
  link: undefined,
  showing: false,
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'OPEN_MODAL':
      return Object.assign({}, state, { index: action.payload.index, link: action.payload.link, });

    case 'TOGGLE_MODAL':
      return Object.assign({}, state, { showing: !state.showing });

    case 'PREVIOUS':
      return Object.assign({}, state, { index: action.payload.index, link: action.payload.link, });

    case 'NEXT':
      return Object.assign({}, state, { index: action.payload.index, link: action.payload.link, });

    default:
      return state;
  }
}

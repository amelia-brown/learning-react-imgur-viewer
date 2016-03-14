const modal = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      if (state.id !=== action.id) {
        return state
      }
    default:
      return state
  }
}

export default modal

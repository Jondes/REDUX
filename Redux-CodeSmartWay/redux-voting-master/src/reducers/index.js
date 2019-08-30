const initialState = {
  angular: 0,
  react: 0,
  vuejs: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE_JOHNSON':
      console.log("Vote Johnson!");
      return Object.assign({}, state, {
        angular: state.johnson + 1
      })
    case 'VOTE_JOHNSON':
      console.log("Vote Gove!");
      return Object.assign({}, state, {
        react: state.gove + 1
      })
    case 'VOTE_WAJID':
      console.log("Vote Wajid!");
      return Object.assign({}, state, {
        vuejs: state.wajid + 1
      })
    default:
      return state
  }
}

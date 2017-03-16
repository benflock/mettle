
var initialPlayerData = {
  credits: 100,
  round: 0,
  cargo: 100
}

export var playerData = (state = initialPlayerData, action) => {
  switch (action.type) {
    case "INCREMENT_ROUND":
      return Object.assign({}, state, {round: state.round + 1})
    case "DECREMENT_ROUND":
      return Object.assign({}, state, {round: state.round - 1})
    default:
      return state
  }
}

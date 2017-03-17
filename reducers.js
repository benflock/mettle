
var initialPlayerData = {
  credits: 900,
  round: 0,
  cargo: 100,
  player_id: 0
}

export var playerData = (state = initialPlayerData, action) => {
  switch (action.type) {
    case "INCREMENT_ROUND":
      return Object.assign({}, state, {round: state.round + 1})
    case "FETCH_PLAYER_DATA":
      return Object.assign({}, state, {player_id: state.player_id + Math.random()})
    default:
      return state
  }
}

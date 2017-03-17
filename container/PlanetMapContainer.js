import { connect } from 'react-redux'
import PlanetMap from '../components/PlanetMap'

const mapStateToProps = (state, ownProps) => {
  return {
    planetData: state.planetData
  }
}

const mapDispatchToProps = (state, ownProps) => {
  return { }
}

const PlanetMapContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(PlanetMap)

export default PlanetMapContainer

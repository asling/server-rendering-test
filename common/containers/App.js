import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from '../components/home'
import * as CounterActions from '../actions'

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

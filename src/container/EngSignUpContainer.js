import { connect } from 'react-redux'
import EngSignUp from '../components/EngSignUp'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

const mapStateToProps = (state) => ({
  en: state.en
})

export default connect(mapStateToProps, mapDispatchToProps)(EngSignUp)

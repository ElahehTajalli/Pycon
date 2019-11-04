import { connect } from 'react-redux'
import SignUp from '../components/SignUp'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

const mapStateToProps = (state) => ({
  en: state.en
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

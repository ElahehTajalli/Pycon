import { connect } from 'react-redux'
import SignUp from '../components/SignUp'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapDispatchToProps)(SignUp)

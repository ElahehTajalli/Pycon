import { connect } from 'react-redux'
import Navbar from '../components/Navbar'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapDispatchToProps)(Navbar)
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

const mapStateToProps = (state) => ({
  en: state.en,
  changeLang: state.changeLang
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
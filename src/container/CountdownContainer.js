import { connect } from 'react-redux'
import Conutdown from '../components/Countdown'


const mapStateToProps = (state) => ({
  en: state.en,
})

export default connect(mapStateToProps)(Conutdown)
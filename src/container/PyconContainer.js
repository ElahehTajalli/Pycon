import Pycon from '../components/Pycon'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    en: state.en
})

export default connect(mapStateToProps)(Pycon)
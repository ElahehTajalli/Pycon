import ContactSection from '../components/ContactSection'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    en: state.en
})

export default connect(mapStateToProps)(ContactSection)
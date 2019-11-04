import HomeSection from '../components/HomeSection'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    en: state.en
})

export default connect(mapStateToProps)(HomeSection)
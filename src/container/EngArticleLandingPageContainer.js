import EngArticleLandingPage from '../components/EngArticleLandingPage'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    firstname: state.firstname,
    lastname: state.lastname,
    email: state.email,
})

export default connect(mapStateToProps)(EngArticleLandingPage)